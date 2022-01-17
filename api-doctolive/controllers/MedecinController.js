const Medecin = require('../models/medecin');

const City = require('./../models/city');
const Experiences = require('./../models/experience');
const Tarif = require('./../models/tarif');
const Horaire = require('./../models/horaire');
const Adress = require('./../models/adress');
const Image = require('./../models/image');
const Consultation = require('./../models/consultation');
const Patient = require('./../models/patient');

const Specialite = require('./../models/specialite');
const { Op } = require("sequelize");
const moment = require('moment')

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const {  validationResult} = require('express-validator');

exports.getAllMedecin = (req, res) => {
    try {
        Medecin.findAll({include: [{model: City}, {model: Specialite, as: "specialites",}]})
        .then((medecins) => {
            res.status(200).json({error: false, medecins })
        })
        .catch(err => res.status(400).json({ error: true, message: 'can not get medecin' }))

    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}
exports.getThisMedecinTarifs = (req, res) => {
    try {
        Tarif.findAll({ where : {deleted: false}})
        .then((typeConsultation) => {
            res.status(200).json({error: false, typeConsultation })
        })
        .catch(err => {
            res.status(400).json({ error: true, message: 'Nous avons pas pus récupérer les type de consultation de ce médecin' })
        })

    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}
exports.deleteMedecinTarif = (req, res) => {
    try {
        Tarif.update( {deleted: true}, {where : {id : req.params.id}})
        .then((destroyed) => {
            res.status(200).json({error: false, destroyed })
        })
        .catch(err => {
            res.status(400).json({ error: true, message: 'Nous avons pas pus récupérer les type de consultation de ce médecin' })
        })

    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}
exports.updateMedecinTarif = (req, res) => {
    try {
        let {
            name,
            price,
            color,
        } = req.body
        Tarif.update({name, price, color}, {where : {id : req.params.id}})
        .then((updatedTarif) => {
            res.status(200).json({error: false, updatedTarif })
        })
        .catch(err => {
            res.status(400).json({ error: true, message: 'Nous avons pas pus récupérer les type de consultation de ce médecin' })
        })

    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.getThisMedecinConsultation = (req, res) => {
    try {
        Consultation.findAll({
            where: {
                medecinId: req.user.id,
                canceled: false,
            },
            include : [
                {model : Tarif},
                {model: Patient, attributes: { exclude: ['password'] }}
            ]
        })
        .then((consultation) => {
            res.status(200).json({error: false, consultation })
        })
        .catch(err => res.status(400).json({ error: true, message: 'can not get medecin' }))

    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.getThisMedecinTeleconsultation = (req, res) => {
    try {
        Consultation.findAll({
            where: {
                medecinId: req.user.id,
                canceled: false,
                teleconsultation: true
            },
            include : [
                {model : Tarif, where : {deleted: false}, required: false},
                {model: Patient, attributes: { exclude: ['password'] }}
            ],
            order: ['date'],
        })
        .then((consultations) => {
            res.status(200).json({error: false, consultations })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({ error: true, message: 'can not get medecin' })
        })

    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.getThisMedecinNextTeleconsultation = (req, res) => {
    try {
        let parameters = [
            {'date' :{ [Op.gte]: moment().toDate() } },
            {'active' : true}
        ]
        
        Consultation.findAll({
            where: {
                medecinId: req.user.id,
                canceled: false,
                teleconsultation: true,
                [Op.or]: parameters,

            },
            include : [
                {model : Tarif , where : {deleted: false}, required: false},
                {model: Patient, attributes: { exclude: ['password'] }}
            ],
            order: ['date'],
        })
        .then((consultations) => {
            res.status(200).json({error: false, consultations })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({ error: true, message: 'can not get medecin' })
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.getThisMedecinOldTeleconsultation = (req, res) => {
    try {
        Consultation.findAll({
            where: {
                medecinId: req.user.id,
                canceled: false,
                teleconsultation: true,
                date: {
                    [Op.gte]: moment().toDate()
                  }
            },
            include : [
                {model : Tarif, where : {deleted: false}, required: false},
                {model: Patient, attributes: { exclude: ['password'] }}
            ],
            // order: ['date'],
        })
        .then((consultations) => {
            res.status(200).json({error: false, consultations })
        })
        .catch(err => {
            console.log(err)
            res.status(400).json({ error: true, message: 'can not get medecin' })
        })

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
        res.status(500).json({ error: true,err, message: 'server problem' })
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

exports.getThisMedecin = async (req, res) => {
    try {
        let thisMedecin = await Medecin.findOne({
            where : { id: req.user.id},
            include: [

                {
                    model: Specialite,
                    as: "specialites",
                },
                {
                    model: City
                },
                {
                    model: Experiences
                },
                {
                    model: Tarif , where : {deleted: false}, required: false
                },
                {
                    model: Horaire
                },
                {
                    model: Adress
                },
                { model: Image },
            ]
        });
        res.status(200).json({error: false, thisMedecin })

        // Medecin.findOne()
        // .then((medecin) => {
        //     res.status(200).json({error: false, medecin })
        // })
        // .catch(err => res.status(400).json({ error: true, message: 'can not get medecin' }))

    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.storeMedecin = (req, res) => {
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
            rpps,
            adeli,
            dureeTeleconsultation,
            dureeConsultation,
            presentation,
            cityId,
            sexe,
        } = req.body;

        Medecin.create({ 
            email,
            phone,
            nom,
            prenom,
            rpps,
            adeli,
            dureeTeleconsultation,
            dureeConsultation,
            presentation,
            cityId,
            sexe,
        })
        .then((addedMedecin) => {
            res.status(201).json({ error: false, addedMedecin });
        })
        .catch((err) => res.status(400).json({ error: true, err, validator:false,  message: 'can not added delevery' }))
    } catch (error) {
        res.status(500).json({ error: true, validator:false, message: 'server problem' })  
    }
}

exports.updateMedecin = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }   

        let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});

        let { 
            email,
            phone,
            sexe,
            nom,
            teleconsultationIsDisponible,
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
            teleconsultationIsDisponible,
            presentation,
            cityId,
        }, {
            where: { id: thisMedecin.getDataValue('id') }
        })
        .then( async () => {
            let updatedMedecin = await Medecin.findByPk(req.params.id, {
                include: [
                    { model: City },
                ]
            })
            res.status(202).json({ error: false, updatedMedecin });
        })
        .catch((err) => res.status(400).json({ error: true, message: "nous avons pas pus modifier les information" }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
}

exports.showOneMedecin = async (req, res) => {
    try {
        let medecin = await Medecin.findByPk(req.params.id, {
            include: [
                { model: City },
                {model: Specialite, as: "specialites", },
                { model: Experiences },
                { model: Horaire },
                { model: Adress },
                { model: Tarif , where : {deleted: false}, required: false},
                { model: Image },
            ]
        })
        if(!medecin) return res.status(400).json({ error: true, message: 'medecin non trouvé' }); 
        res.status(200).json({error: false, medecin});    
    } catch (error) {
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}



exports.AuthMedecin = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }

        let {password, email}= req.body;
        var user = await Medecin.findOne({ where:{email: email } });

        if(!user){
            return res.status(400).json({ error: true, message: "email n'éxiste pas" });
        }

        if(!user.active){
            return res.status(400).json({ error: true, message: "Ce compte n'est pas encore validé" });
        }

        if(user.deleted){
            return res.status(400).json({ error: true, message: "Ce compte à était suprimer" });
        }

        if(user.blocked){
            return res.status(400).json({ error: true, message: "Ce compte à était blocker par un admin vous ne pouvez pas accédez à votre compte pour le moment" });
        }

        let validPassword = await bcrypt.compare(password, user.dataValues.password);
        if(!validPassword){ 
            return res.status(400).json({ error: true, message: "mot de passe incorrect" });
        }

        var token = jwt.sign(
            {
            id: user.id, 
            type: "medecin"
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


exports.storeMedecinSpecialite = async (req, res) => {
    try {
        // console.log("medecinSpecialities")
        let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});

        const associations = await Medecin.findOne( {
            where : { id: req.user.id},
            include: [{
            model: Specialite,
            as: "specialites",
        }]});

        associations.getDataValue('specialites').map( async (ass) => {

            await thisMedecin.removeSpecialite(ass)
        })

        req.body.specialities.map( async (specialiteMedecin) => {
            let thisSpecialite = await Specialite.findByPk(specialiteMedecin.id);
            await thisMedecin.addSpecialite(thisSpecialite)
        })

        let medecinSpecialities = await Medecin.findByPk(req.user.id, {include: [{
            model: Specialite,
            as: "specialites",
        }]});

        return res.status(200).json({error: false, medecinSpecialities}); 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}

exports.blockPatient = async (req, res) => {
    try {

        let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});

        let thisPatient = await Patient.findByPk(req.body.patientId);
        await thisMedecin.addBlockedPatient(thisPatient)
        

        return res.status(200).json({error: false}); 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}

exports.checkBlock = async (req, res) => {
    try {

        let parameters = [
            { id: req.user.id },
            // { '$blockedPatient.id$': req.params.id},
        ]

        let thisMedecin = await Medecin.findOne({ include: [{model: Patient, as: "blockedPatient", where: {id: req.params.id}}], where : { [Op.and]: parameters}});


        return res.status(200).json({error: false, nbr: thisMedecin.blockedPatient.length}); 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}

exports.storeMedecinExperience = async (req, res) => {
    try {
        let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});

        const associations = await Medecin.findOne( {
            where : { id: req.user.id},
            include: [{
            model: Experiences,
        }]});

        associations.getDataValue('diplomes').map( async (ass) => {

            await ass.destroy()
        })

        let experiences = req.body.experiences;
        
        experiences.map((exp)=> {
            exp.medecinId = thisMedecin.getDataValue("id");
            delete exp.id
        })

        let experiencesPercictent = await Experiences.bulkCreate(experiences)

        // console.log(experiencesPercictent)

        return res.status(200).json({error: false, experiencesPercictent}); 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}

exports.storeMedecinTarifs = async (req, res) => {
    try {
        let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});

        let tarifs = req.body;
        
        tarifs.map((tarif)=> {
            tarif.medecinId = thisMedecin.getDataValue("id");
            delete tarif.id
        })

        let tarifsPerssistence = await Tarif.bulkCreate(tarifs)

        return res.status(200).json({error: false, tarifsPerssistence}); 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}

exports.storeMedecinHoraire = async (req, res) => {
    try {
        let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});

        let horaire = req.body;
        
        horaire.map((hour)=> {
            hour.medecinId = thisMedecin.id;
        })

        let horairePerssistence = await Horaire.bulkCreate(horaire)

        return res.status(200).json({error: false, horairePerssistence}); 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, err: error, message: 'server problem' });
    }
}

exports.storeMedecinAccess = async (req, res) => {
    try {
        // let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});
        let { 
            streetName,
            buildingName,
            sector,
            nameCompany,
            floor,
            housseNumber,
            codePostal,
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
        } = req.body
        let thisMedecin = await Medecin.findOne({where : { id: req.user.id}});

        const oldAdress = await Adress.findOne({
            where : { medecinId: thisMedecin.id},
        });
        if(oldAdress) oldAdress.destroy()
        

        let newAccessInfo = await Adress.create({
            streetName,
            buildingName,
            sector,
            nameCompany,
            floor,
            housseNumber,
            codePostal,
            latitude,
            longitude,
            latitudeDelta,
            longitudeDelta,
            medecinId: thisMedecin.id,
        });

        if(!newAccessInfo) return res.status(400).json({ error: true, message: 'on a pas pus créer les information d\'accés' });
      
        // let horaire = req.body.horaire;
        
        // horaire.map((hour)=> {
        //     hour.medecinId = thisMedecin.getDataValue("id");
        // })

        // let horairePerssistence = await Horaire.bulkCreate(horaire)

        return res.status(200).json({error: false, newAccessInfo}); 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' });
    }
}

exports.deleteHour = async (req, res) => {
    try {
        let deletedElement = await Horaire.destroy({where: {id: req.params.id}})        
        return res.status(200).json({error: false, deletedElement}); 
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' });
    }
}
exports.updateHour = async (req, res) => {
    try {
        let {
            debut_matin,
            fin_matin,
            debut_soir,
            fin_soir,
            jour,
            is_matin,
            is_soir,
        } = req.body
        let updatedElement = await Horaire.update({
            debut_matin,
            fin_matin,
            debut_soir,
            fin_soir, 
            jour,
            is_matin,
            is_soir,
        } , {where: {id: req.params.id}})        
        return res.status(200).json({error: false, updatedElement}); 
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

        var user = await Medecin.findOne({
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

        let isUpdated = await Medecin.update({
            password: hashedPassword,
            passwordChanged: true
        }, {
            where: { id: req.user.id }
        });

        if(!isUpdated) return res.status(400).json({ error: true, message: "Mauvaise requette" });

        let updatePatient = await Medecin.findByPk(req.user.id)
        
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

