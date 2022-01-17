const Medecin = require('../models/medecin');

const City = require('./../models/city');
const Experiences = require('./../models/experience');
const Tarif = require('./../models/tarif');
const Horaire = require('./../models/horaire');
const Adress = require('./../models/adress');
const Image = require('./../models/image');
const Admin = require('./../models/admin');
const Consultation = require('./../models/consultation')
const Patient = require('./../models/patient');

const bcrypt = require('bcryptjs');

const Specialite = require('./../models/specialite');
const { Op } = require("sequelize");

const {  validationResult} = require('express-validator');
const { sendMail, generatePassword } = require('./../util/emailSender')

const mailBodyHtml =  require('./../mailContent/medecinAccountCreate')


exports.getDashbord = async (req, res) => {
    try {
        const patients = await Patient.count({where: {deleted: false}})
        const medecins = await Medecin.count({where: {deleted: false}})
        const consultations = await Consultation.count({where: {canceled: false}})

        return res.status(200).json({patients, medecins, consultations })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.getAllElement = (req, res) => {
    try {
        Admin.findAll()
        .then((admins) => {
            res.status(200).json({error: false, admins })
        })
        .catch(err => res.status(400).json({ error: true, message: 'can not get medecin' }))

    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}


    exports.getMedecinBySpecialite = async (req, res) => {
    try {
        let {value} = req.params
        let parameters = [
            { 'nom': { [Op.like]: '%' + value + '%' } },
            { 'prenom': { [Op.like]: '%' + value + '%' } },
            { 'phone': { [Op.like]: '%' + value + '%' } },
            { 'email': { [Op.like]: '%' + value + '%' } },
        ]
      
        var options = {
            where: {
                [Op.or]: parameters
            },
            include: [
                { model: City },
            ]
        };

        let parametersSpec = [
            { 'name': { [Op.like]: '%' + value + '%' } },
        ]
        var optionsSpec = {
            where: {
                [Op.or]: parametersSpec
            }
        };

        let medecins = await Medecin.findAll(options);
        let speciality = await Specialite.findAll(optionsSpec);
        if(!medecins) return res.status(400).json({ error: true, message: 'Paramétre de recherche invalide' })
        return res.status(200).json({error: false, medecins, speciality });


    } catch (err) {
        console.log(err)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

    exports.rechercheMedecin = async (req, res) => {
    try {
        let {specialite, ville} = req.params
        let parameters = [
            { 'nom': { [Op.like]: '%' + specialite + '%' } },
            { '$specialites.name$': { [Op.like]: '%' + specialite + '%' } },
        ]
        let villeParams = []
        if(ville  === "maroc" || !ville ) {
            
        }else {
            villeParams = { '$City.name$': { [Op.like]: '%' + ville + '%' } }
        }
       
        var options = {
            where: {
                [Op.or]: parameters,
                 ...villeParams,
            },
            include: [
                { model: City },
                {model: Specialite, as: "specialites", },
                { model: Experiences },
                { model: Horaire },
                { model: Adress },
                { model: Image },
                { model: Tarif , where : {deleted: false}, required: false },
            ]
        };

        let medecins = await Medecin.findAll(options)
        if(!medecins) return res.status(400).json({ error: true, message: 'Paramétre de recherche invalide' })
        return res.status(200).json({error: false, medecins });


    } catch (err) {
        console.log(err)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}


exports.storeMedecin = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, validator:true, message: resultError });
        }   

        let password= generatePassword();

        const salt = await bcrypt.genSalt(10);

        let hashedPassword = await bcrypt.hash(password, salt);

        if(!hashedPassword) {
            // hashedPassword = try another way
            // return res.status(300).json({error: true, data: "on peut pa hacher le mot de passe" });
        }

        let {  
            nom, 
            prenom,
            email, 
            phone, 
            cityId,
        } = req.body;

        Medecin.create({ 
            nom, 
            prenom,
            email, 
            password: hashedPassword, 
            phone, 
            cityId,
            addedByAdmin: 1,
        })
        .then( async (addedMedecin) => {
             /*****   SENDING email with account details + (password) ********/
           

             let messageBudy= mailBodyHtml(addedMedecin, password);
 
             let message = {
                 from: process.env.GMAIL_USER_NAME,
                 to: addedMedecin.email,
                 subject: "Validation du compte DOCTOLIVE",  
                 html: messageBudy,
             };
             let responseMail = {sent: false}
            //   responseMail = await sendMail(message);
 
              if(!responseMail.sent) {
                return res.status(201).json({ error: false, emailSent: false, addedMedecin, password });
              }else {
                 return res.status(201).json({ error: false, addedMedecin, emailSent: true});
              }


            
        })
        .catch((err) => {console.log(err); res.status(400).json({ error: true, err, validator:false,  message: 'can not added medecin' })})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}

exports.updateMedecin = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }   

        let { 
            email,
            phone,
            sexe,
            nom,
            prenom,
            rpps,
            adeli,
            presentation,
            cityId,
        } = req.body;

        Medecin.update({
            email,
            phone,
            sexe,
            nom,
            prenom,
            rpps,
            adeli,
            presentation,
            cityId,
        }, {
            where: { id: req.params.id }
        })
        .then( async () => {
            let updatedMedecin = await Medecin.findByPk(req.params.id, {
                include: [
                    { model: City },
                ]
            })
            res.status(200).json({ error: false, updatedMedecin });
        })
        .catch((err) => res.status(400).json({ error: true, message: "nous avons pas pus modifier les information" }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
}

exports.showOneElement = async (req, res) => {
    try {
        let admin = await Admin.findByPk(req.params.id)
        if(!admin) return res.status(400).json({ error: true, message: 'Admin not found' }); 
        res.status(200).json({error: false, admin});    
    } catch (error) {
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}



exports.validateMedecin = async (req, res) => {
    try {
        
            await Medecin.update({active: true}, { where: { id: req.params.id } });

            let validatedMedecin = await Medecin.findByPk(req.params.id);
            return res.status(200).json({ error: false, validatedMedecin,  activated: true, message:"" })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.deleteMedecin = async (req, res) => {
    // try {
        // let deletedElement = await Medecin.destroy({where: {id: req.params.id}});
   
        // return res.status(200).json({ error: false, deletedElement});

    // } catch (error) {
        try{
        //    if(error.name === "SequelizeForeignKeyConstraintError"){

            let deletedElement = await Medecin.update({
                deleted: 1,
            }, {
                where: { id: req.params.id }
            });
            return res.status(200).json({ error: false, deletedElement});
        //    }else {
        //     return res.status(400).json({ error: false, message: "une erreur inconue est survenue"});
        //    }
        }catch(err) {
            res.status(500).json({ error: true, message: 'server problem' })
        }
       
    // }
   
}

exports.blockeMedecin = async (req, res) => {
    try{

         let deletedElement = await Medecin.update({
            blocked: 1,
         }, {
             where: { id: req.params.id }
         });
         return res.status(200).json({ error: false, deletedElement});
       
     }catch(err) {
         console.log(err)
         res.status(500).json({ error: true, message: 'server problem' })
     }
   
}

exports.deblockeMedecin = async (req, res) => {
    try{

         let deletedElement = await Medecin.update({
            blocked: 0,
         }, {
             where: { id: req.params.id }
         });
         return res.status(200).json({ error: false, deletedElement});
       
     }catch(err) {
         console.log(err)
         res.status(500).json({ error: true, message: 'server problem' })
     }
   
}


exports.getThisMedecinConsultation = (req, res) => {
    try {
        Consultation.findAll({
            where: {
                medecinId: req.params.id,
                canceled: false,
            },
            include : [
                {model : Tarif},
                {model: Patient, attributes: { exclude: ['password'] }}
            ]
        })
        .then((medecinConsultation) => {
            res.status(200).json({error: false, medecinConsultation })
        })
        .catch(err => res.status(400).json({ error: true, message: 'can not get medecin' }))

    } catch (err) {
        
        res.status(500).json({ error: true, message: 'server problem' })
    }
}




exports.storePatient = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, validator:true, message: resultError });
        }   

        let password= generatePassword();

        const salt = await bcrypt.genSalt(10);

        let hashedPassword = await bcrypt.hash(password, salt);

        if(!hashedPassword) {
            // hashedPassword = try another way
            // return res.status(300).json({error: true, data: "on peut pa hacher le mot de passe" });
        }

        let {  
            nom, 
            prenom,
            email, 
            phone, 
        } = req.body;

        Patient.create({ 
            nom, 
            prenom,
            email, 
            password: hashedPassword, 
            phone, 
            addedByAdmin: 1,
        })
        .then( async (addedPatient) => {
             /*****   SENDING email with account details + (password) ********/
           

             let messageBudy= mailBodyHtml(addedPatient, password);
 
             let message = {
                 from: process.env.GMAIL_USER_NAME,
                 to: addedPatient.email,
                 subject: "Validation du compte DOCTOLIVE",  
                 html: messageBudy,
             };
             let responseMail = {sent: false}
            //   responseMail = await sendMail(message);
 
              if(!responseMail.sent) {
                return res.status(201).json({ error: false, emailSent: false, addedPatient, password });
              }else {
                 return res.status(201).json({ error: false, addedPatient, emailSent: true});
              }


            
        })
        .catch((err) => {console.log(err); res.status(400).json({ error: true, err, validator:false,  message: 'can not added medecin' })})
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}

exports.updatePatient = async (req, res) => {
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
            let updatedPatient = await Patient.findByPk(req.params.id)
            res.status(200).json({ error: false, updatedPatient });
        })
        .catch((err) => res.status(400).json({ error: true, message: "nous avons pas pus modifier les information" }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
}

exports.deletePatient = async (req, res) => {
   
    try{
        let deletedElement = await Patient.update({
            deleted: 1,
        }, {
            where: { id: req.params.id }
        });
        return res.status(200).json({ error: false, deletedElement});
    
    }catch(err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }   
}
