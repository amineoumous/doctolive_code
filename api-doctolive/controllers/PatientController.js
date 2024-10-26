

const Patient = require('../models/patient')
const Consultation = require('../models/consultation')
const Documents = require('../models/documents')
const Medecin = require('../models/medecin')
const Horaire = require('../models/horaire')
const Proches = require('../models/proches')
const {Op} = require('sequelize');
const moment = require('moment')


var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const mailBodyHtml =  require('./../mailContent/medecinAccountCreate')

const { sendMail } = require('./../util/emailSender')

const {  validationResult} = require('express-validator');

exports.getAllElement = (req, res) => {
    try {
        Patient.findAll()
        .then((patients) => {
            res.status(200).json({error: false, patients })
        })
        .catch(err => res.status(400).json({ error: true, message: 'Aucun patient trouvé' }))

    } catch (err) {
        res.status(500).json({ error: true, message: 'Problème au niveau du sérveur' })
    }
}

exports.getAuthUser = async (req, res) => {
    try {
        let thisUser = await Patient.findByPk(req.user.id);
        if(!thisUser) return res.status(400).json({ error: true, message: 'Cet utilisateur est introuvable' });
        res.status(200).json({error: false, thisUser })
    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}


exports.getOneElement = async (req, res) => {
    try {
        let patient = await Patient.findByPk(req.params.id)
        if(!patient) return res.status(400).json({ error: true, message: 'Cet utilisateur est introuvable' }); 
        res.status(200).json({error: false, patient});    
    } catch (error) {
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}

exports.getOneElementWithConsultation = async (req, res) => {
    try {
        let patient = await Patient.findByPk(req.params.id, {include:[{model: Consultation, include: [{model: Medecin}]}]})
        if(!patient) return res.status(400).json({ error: true, message: 'Cet utilisateur est introuvable' }); 
        res.status(200).json({error: false, patient});    
    } catch (error) {
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}

exports.verifAuthUser = async (req, res) => {
    try {
        let patient = await Patient.findByPk(req.user.id)
        if(!patient) return res.status(401).json({ error: true, message: 'Cet utilisateur est introuvable' }); 
        res.status(200).json({error: false, patient});    
    } catch (error) {
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}

exports.confirmPatient = async (req, res) => {
    try {
    let autHeader = req.params.token;

    if(!autHeader){
      res.status(401).json({error: true, message:'aucun token envoyé'});
    }
    let decodedToken;
    // const token = autHeader.split(' ')[1];
    try{
      decodedToken = jwt.verify(autHeader, process.env.TOKEN_SECRET);
      req.user = decodedToken;

      Patient.update({
        active: true,
    }, {
        where: { id: decodedToken.id }
    })
    .then( async () => {
        let updatedUser = await Patient.findByPk(decodedToken.id)
        res.status(202).json({ error: false, updatedUser });
    })
    .catch((err) => res.status(400).json({ error: true, message: "nous avons pas pus modifier les information de cet utilisateur" }))
    }
    catch (err){
      res.status(401).json({error: true, message:'token invalid or expired'});
    } 
    } catch (error) {
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}


exports.generationLink = async (req, res) => {
    try {
        let thisUser = await Patient.findByPk(req.user.id)

        if(!thisUser) return res.status(400).json({ error: true, message:"Utilisateur introuvable" });
        let confirmToken = jwt.sign(
            {
            id: thisUser.id, 
            },
            process.env.TOKEN_SECRET,
            { expiresIn: 60 * 5}
        );
        let currentUrl =  req.get('origin');
        
        let confirmationUrl = currentUrl + `/confirm/${confirmToken}`;

        let messageBudy= mailBodyHtml(thisUser, confirmationUrl);

        let message = {
            from: process.env.GMAIL_USER_NAME,
            to: thisUser.email,
            subject: "Activation de votre compte doctolive",  
            html: messageBudy,
        };


        try {
            let {error, data} = await sendMail(message);

            let emailSent= true;
            
            if(error){
                emailSent = false;
            }
            res.status(201).json({ error: false });

        } catch (error) {
            console.log(error)
            res.status(201).json({ error: false });

        }
       

        /*****   SENDING email with account details + (password) ********/
       
       
        /* ****************    A DECOMENTER
        
        
        
        
        ****************************** */
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}


exports.storeElement = async (req, res) => {
    try {
        let resultError= validationResult(req).array();
        if(resultError.length > 0){  
            return res.status(400).json({ error: true, validator:true, message: resultError });
        }

        let {  
            email,
            phone,
            nom,
            prenom,
            password,
        } = req.body;

        const salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        if(!hashedPassword) {
            return res.status(400).json({error: true, data: "on peut pa hacher le mot de passe" });
        }

        Patient.create({ 
            email,
            phone,
            active: true,
            nom,
            prenom,
            password: hashedPassword,
        })
        .then((addedUser) => {
            var token = jwt.sign(
                {
                id: addedUser.id, 
                type: "patient"
                },
                process.env.TOKEN_SECRET,
            );
            let confirmToken = jwt.sign(
                {
                id: addedUser.id, 
                },
                process.env.TOKEN_SECRET
            );
            let currentUrl =  req.get('origin');
            
            let confirmationUrl = currentUrl + `/confirm/${confirmToken}`;

            let messageBudy= mailBodyHtml(addedUser, confirmationUrl);

            let message = {
                from: process.env.GMAIL_USER_NAME,
                to: email,
                subject: "Activation de votre compte doctolive",  
                html: messageBudy,
            };



            let {error, data} = sendMail(message);

            // let emailSent= true;
            // if(error){
            //     emailSent = false;
            // }

            /*****   SENDING email with account details + (password) ********/
           
           
            /* ****************    A DECOMENTER
            
            
            
            
            ****************************** */
            res.status(201).json({ error: false, addedUser, token });
        })
        .catch((err) => res.status(400).json({ error: true, err, validator:false,  message: 'On a pas pus ajouter ce utilisateur, une erreur inconue est survenue' }))
    } catch (error) {
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}
exports.addConsultation = async (req, res) => {
    try {
        let resultError= validationResult(req).array();
        if(resultError.length > 0){  
            return res.status(400).json({ error: true, validator:true, message: resultError });
        }

        let {  
            medecinId,
            date,
            time,
            type,
            tarifId,
            title,
            description,

        } = req.body;

        let isBlocked = await Patient.findOne({ include: [{model: Medecin, as: "blockedBy", where: {id: medecinId}}], where : { id: req.user.id}});
        // console.log(isBlocked.blockedBy)
        if(isBlocked){
            if (isBlocked.blockedBy.length)  return res.status(400).json({ error: true, validator:false, message: "Nous sommes désolés, ce médecin à indiquer que vous ne pouvez plus prendre un rendez-vous enligne chez son cabinet." }) 
        }

        let exstingConsultation = await Consultation.findOne({where: {date: date, time:time, medecinId: medecinId, canceled : false}});
        if(exstingConsultation) return res.status(400).json({ error: true, validator:false, message: "Nous sommes désolés, cette plage horaire vient d'être réservée par un autre patient. Nous vous proposont de choisir une autre plage horaire." }) 
        
        Consultation.create({
            medecinId,
            date,
            time,
            teleconsultation: type ==="teleconsultation"  ? true: false ,
            tarifId,
            title,
            description,
            patientId: req.user.id,
            active: true,
        })
        .then((addedConsultation) => {   
            /* **************** 
                TRIGGGER MESSAGE TO DOCTOR            
            ****************************** */
            res.status(201).json({ error: false, addedConsultation });
        })
        .catch((err) => res.status(400).json({ error: true, err, validator:false,  message: 'On a pas pus ajouter ce utilisateur, une erreur inconue est survenue' }))
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}
exports.addProche = async (req, res) => {
       
    try {
        let resultError= validationResult(req).array();
        if(resultError.length > 0){  
            return res.status(400).json({ error: true, validator:true, message: resultError });
        }

        let {  
            nom,
            prenom,
            date_naissance,
            lieu_naissance,
            address,
            gender,
        } = req.body;

  

    
        Proches.create({
            nom,
            prenom,
            date_naissance,
            lieu_naissance,
            address,
            gender,
            patientId: req.user.id
        })
        .then((addedProches) => {   
            /* **************** 
                TRIGGGER MESSAGE TO DOCTOR            
            ****************************** */
            res.status(201).json({ error: false, addedProches });
        })
        .catch((err) => res.status(400).json({ error: true, err, validator:false,  message: 'On a pas pus ajouter ce utilisateur, une erreur inconue est survenue' }))
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}

exports.getUserAppintoments = async (req, res) => {
    try {
        Consultation.findAll({ 
            where:{ 
                patientId: req.user.id,
                canceled: false,
            },
            include: [
                {
                    model: Medecin,
                    include: [Horaire]
                }
            ]
        })
        .then((consultations) => {   
            res.status(201).json({ error: false, consultations });
        })
        .catch((err) => res.status(400).json({ error: true, err, validator:false,  message: 'Nous avons pas pus importer vos rendez-vous' }))
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}

exports.getUserDocuments = async (req, res) => {
    try {
        Documents.findAll({ 
            where:{
                patientId: req.user.id
            },
            include: [
                {
                    model: Medecin,
                }
            ]
        })
        .then((documents) => {   
            res.status(201).json({ error: false, documents });
        })
        .catch((err) => res.status(400).json({ error: true, err, validator:false,  message: 'Nous avons pas pus importer vos rendez-vous' }))
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}
exports.getUserProches = async (req, res) => {
    try {
        Proches.findAll({ 
            where:{
                patientId: req.user.id
            }
        })
        .then((proches) => {   
            res.status(201).json({ error: false, proches });
        })
        .catch((err) => res.status(400).json({ error: true, err, validator:false,  message: 'Nous avons pas pus importer vos rendez-vous' }))
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}
exports.getUserNextAppintoments = async (req, res) => {
    try {
        let parameters = [
            {[Op.or]: [
                { [Op.and] : 
                    [
                        {"active": true},
                        {'teleconsultation': true},
                    ]
                },
                { [Op.and]: 
                    [
                        {'teleconsultation': false},
                        {'date' :{ [Op.gte]: moment().toDate() }}
                    ]
                },
                ,
            ]}
        ]
        Consultation.findAll({ 
            where:{ 
                patientId: req.user.id,
                canceled: false,
                
                [Op.and]: parameters,
            },
            include: [
                {
                    model: Medecin,
                    include: [Horaire]
                }
            ]
        })
        .then((consultations) => {   
          
            res.status(201).json({ error: false, consultations });
        })
        .catch((err) => res.status(400).json({ error: true, err, validator:false,  message: 'Nous avons pas pus importer vos rendez-vous' }))
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}

exports.getUserOldAppintoments = async (req, res) => {
    try {
        
        Consultation.findAll({ 
            where:{ 
                patientId: req.user.id,
                canceled: false,
                date: {
                    [Op.lte]: moment().toDate()
                },
                active: false
            },
            include: [
                {
                    model: Medecin,
                    include: [Horaire]
                }
            ]
        })
        .then((consultations) => {   
          
            res.status(201).json({ error: false, consultations });
        })
        .catch((err) => res.status(400).json({ error: true, err, validator:false,  message: 'Nous avons pas pus importer vos rendez-vous' }))
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}

exports.updateElement = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }   

        let {  
            email,
            phone,
            nom,
            prenom,
        } = req.body;


        Patient.update({
            email,
            phone,
            nom,
            prenom,
        }, {
            where: { id: req.params.id }
        })
        .then( async () => {
            let updatedUser = await Patient.findByPk(req.params.id)
            res.status(202).json({ error: false, updatedUser });
        })
        .catch((err) => res.status(400).json({ error: true, message: "nous avons pas pus modifier les information de cet utilisateur" }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
}

exports.updateThisUSer = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }   

        let {  
            email,
            phone,
            nom,
            prenom,
            lieu_naissance,
            date_naissance,
            gender,
        } = req.body;


        Patient.update({
            email,
            phone,
            nom,
            prenom,
            lieu_naissance,
            date_naissance,
            gender,
        }, {
            where: { id: req.user.id }
        })
        .then( async () => {
            let updatedUser = await Patient.findByPk(req.params.id)
            res.status(202).json({ error: false, updatedUser });
        })
        .catch((err) => res.status(400).json({ error: true, message: "nous avons pas pus modifier les information de cet utilisateur" }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
}


exports.newPassword = async (req, res) => {
    try {

        let resultError= validationResult(req).array();

        if(resultError.length > 0){
            return res.status(400).json({ error: true, message: resultError });
        }

        let {  
            password,
            password_confirmation,
            old_password,
            email,
        } = req.body;
        if(password !== password_confirmation ) return res.status(400).json({ error: true, message: "Mot de passe et mot de passe confirmation n'est pas compatible" })

        var user = await Patient.findOne({
            where:{email: email }
        });

        if(!user){
            return res.status(400).json({ error: true, message: "Email n'éxiste pas" });
        }

        let validPassword = await bcrypt.compare(old_password, user.dataValues.password);
        if(!validPassword){ 
            return res.status(400).json({ error: true, message: "Mot de passe incorrect" });
        }

        const salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);

        let isUpdated = await Patient.update({
            password: hashedPassword,
            passwordChanged: true
        }, {
            where: { id: req.user.id }
        });

        if(!isUpdated) return res.status(400).json({ error: true, message: "Mauvaise requette" });

        let updatePatient = await Patient.findByPk(req.user.id)
        
        return res.status(200).json({ error: false, updatePatient });

       
        // .then( async () => {
        //     let updatedUser = await Patient.findByPk(req.params.id)
        //     res.status(202).json({ error: false, updatedUser });
        // })
        // .catch((err) => res.status(400).json({ error: true, message: "nous avons pas pus modifier les information de cet utilisateur" }))
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' });
    }
}


exports.authPatient = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){
            return res.status(400).json({ error: true, message: resultError });
        }

        let {password, email}= req.body;
        var user = await Patient.findOne({
            where:{email: email }
        });

        if(!user){
            return res.status(400).json({ error: true, message: "Email n'éxiste pas" });
        }

        let validPassword = await bcrypt.compare(password, user.dataValues.password);
        if(!validPassword){ 
            return res.status(400).json({ error: true, message: "Mot de passe incorrect" });
        }

        if(user.deleted){
            return res.status(400).json({ error: true, message: "Ce compte à était suprimer" });
        }

        if(user.blocked){
            return res.status(400).json({ error: true, message: "Ce compte à était blocker par un admin vous ne pouvez pas accédez à votre compte pour le moment" });
        }
        
        var token = jwt.sign(
            {
            id: user.id, 
            type: "patient"
            },
            process.env.TOKEN_SECRET,
        );
        delete user.dataValues.password;
        delete user._previousDataValues.password;

        return res.status(200).header('auth-token', token).json({ error: false, token, user }) 
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: true, message: "server problem" });
    }
}



exports.verifAuth = async (req, res) => {
    try {
        
        let user = await Patient.findByPk(req.user.id)

        return res.status(200).json({ error: false, isAuth: true, user }) 
    } catch (error) {
        return res.status(500).json({ error: true, message: "Something went wrong" });
    }
}

exports.inactivatePatient = async (req, res) => {

    try {
        const result = await Patient.update({ blocked:1}, { where: { id: req.params.id } })
        if (!result) return res.status(400).json({ error: true, message: 'On a pas pus désactivé cette utlisateur' });

        /***** TO DO  sending email ********/
        return res.status(200).json({ error: false, blockedUser: result, inactivate: true })
      
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}



exports.deleteElement = async (req, res) => {
    try {
        let deletedElement = await Patient.destroy({where: {id: req.params.id}});
   
        return res.status(200).json({ error: false, deletedElement});

    } catch (error) {
        try{
           if(error.name === "SequelizeForeignKeyConstraintError"){

            let deletedElement = await Patient.update({
                deleted: 1,
            }, {
                where: { id: req.params.id }
            });
            return res.status(200).json({ error: false, deletedElement});
           }else {
            return res.status(400).json({ error: false, message: "une erreur inconue est survenue"});
           }
        }catch(err) {
            console.log(err)
            return res.status(500).json({ error: true, message: 'server problem' })
        }
       
    }
          
}

exports.deblockPatient = async (req, res) => {
    try {
        const result = await Patient.update({ blocked: 0}, { where: { id: req.params.id } })
        if (!result) return res.status(400).json({ error: true, message: 'On a pas pus désactivé cette utlisateur' });

        /*****   sending email ********/
        return res.status(200).json({ error: false, blockedUser: result, inactivate: true })
      
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}



exports.validatePatient = async (req, res) => {
    try {
        const activatedPatient = await Patient.update({active: 1}, { where: { id: req.params.id } })
        res.status(200).json({ error: false, activatedPatient, activated: true })
    } catch (error) {
        // console.log(error)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}