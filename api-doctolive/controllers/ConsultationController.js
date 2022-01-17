

const Patient = require('../models/patient')
const Consultation = require('../models/consultation')
const Medecin = require('../models/medecin')
const Horaire = require('../models/horaire')
const Tarif = require('../models/tarif')
const Adress = require('../models/adress')
const Documents = require('../models/documents')
const Messsage = require('../models/message')
const VideoCall = require('../models/callvideo')

const moment = require('moment')
const {Op, fn} = require('sequelize');


const {  validationResult} = require('express-validator');

exports.getAllElement = (req, res) => {
    try {
        Consultation.findAll()
        .then((consultation) => {
            res.status(200).json({error: false, consultation })
        })
        .catch(err => res.status(400).json({ error: true, message: 'Aucune consultation trouvé' }))
    } catch (err) {
        res.status(500).json({ error: true, message: 'Problème au niveau du sérveur' })
    }
}

exports.storeVideocall = (req, res) => {
    try {
       
        VideoCall.create({
            start: fn('NOW'),
            consultationId: req.params.id
        })
        .then((videocall) => {
            res.status(201).json({ error: false, videocall });
        })
        .catch((err) => res.status(400).json({ error: true, message: 'Please check the data for Tarif' }))  
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'Problème au niveau du sérveur' })
    }
}

exports.endVideocall = (req, res) => {
    try {
       
        VideoCall.update({
            end: fn('NOW'),
        }, { where: { id: req.params.id }})
        .then((videocall) => {
            res.status(201).json({ error: false, videocall });
        })
        .catch((err) => res.status(400).json({ error: true, message: 'Please check the data for Tarif' }))  
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'Problème au niveau du sérveur' })
    }
}

exports.abscence = async (req, res) => {
    try {
       let {who } = req.body
       let obj = who === "patient" ? { isPatientAbscent : true} : {isMedecinAbscent: true};

       const thisConsultation = await Consultation.findByPk(req.params.id);
       console.log(thisConsultation.patientId)
       let alreadyAbscent = await Consultation.findAll({where: { patientId: thisConsultation.patientId, medecinId: thisConsultation.medecinId, isPatientAbscent:true} })

       if(alreadyAbscent.length > 0) console.log("already abscent");
        Consultation.update(obj, { where: { id: req.params.id }})
        .then(() => {
            res.status(201).json({ error: false, absentNumber: alreadyAbscent.length });
        })
        .catch((err) => res.status(400).json({ error: true, message: 'Please check the data for Tarif' }))  
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'Problème au niveau du sérveur' })
    }
}


exports.getOneElement = async (req, res) => {
    try {
        let consultation = await Consultation.findByPk(req.params.id,{
            include: [
                {model: Patient},
                {model: Medecin, include: [{model: Adress}, {model: Horaire}]},
                {model: Tarif},
                {model: Documents},
                {model: Messsage},
            ]
        })
        if(!consultation) return res.status(400).json({ error: true, message: 'Aucune consultation trouvé' })
        return res.status(200).json({error: false, consultation })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: true, message: 'Problème au niveau du sérveur' })
    }
}

exports.closeConsultation = async (req, res) => {
    try {
        let consultation = await Consultation.update({
           active: false,
        }, {
            where: {
                id: req.params.id,
            }
        })
        if(!consultation) return res.status(400).json({ error: true, message: 'Probléme surenue' })
        return res.status(200).json({error: false, consultation });
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: true, message: 'Problème au niveau du sérveur' })
    }
}

exports.getMedecinCalendar = async (req, res) => {
    try {
        let startDate= moment(req.params.date);
        let endDate= moment(req.params.date).add(7, 'days');
        let medecinCalendar = await Consultation.findAll({where: {
            date: {
                [Op.between]: [startDate, endDate]}, 
                medecinId: req.params.idMedecin,
                canceled: false,
        }});
        if(!medecinCalendar) return res.status(200).json({error: false, medecinCalendar: [] })

        res.status(200).json({error: false, medecinCalendar })
    } catch (err) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.cancelConsultation = async (req, res) => {
    try {
        let updatedConsultation = await Consultation.update(
            {
                canceled: true,
            },
            {
                where: {
                    id: req.params.id, 
                }
            }
        );
        if(!updatedConsultation) return res.status(200).json({error: false, updatedConsultation: {} });

        /* 
            IMPORTANT TODO
            send notification to medecin
        */
        res.status(200).json({error: false, updatedConsultation })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}
exports.changeDate = async (req, res) => {
    try {
        let updatedConsultation = await Consultation.update(
            {
                date: req.body.date,
                time: req.body.time,
            },
            {
                where: {
                    id: req.params.id, 
                }
            }
        );
        if(!updatedConsultation) return res.status(200).json({error: false, updatedConsultation: {} });
        let consultation =  await Consultation.findByPk(req.params.id, {
           include : { 
               model: Medecin,
                include: [{model : Horaire}]
            }
        })
        /* 
            IMPORTANT TODO
            send notification to medecin
        */
        res.status(200).json({error: false, consultation })
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}
