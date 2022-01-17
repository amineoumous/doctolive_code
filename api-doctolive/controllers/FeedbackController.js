
const Feedback = require('./../models/feedback');
const Consultation = require('./../models/consultation');
const {  validationResult} = require('express-validator');
const Medecin = require('../models/medecin');
const Patient = require('../models/patient');
const VideoCall = require('../models/callvideo')


exports.getAllfeedback = async (req, res) => {
    try {
        let reportings = await Feedback.findAll()
        if(!reportings) return res.status(400).json({ error: true,err, message: "nous n'avons pas pus récupérer les informations !" })
        res.status(200).json({error: false, reportings })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.getAllOneConsultationFeedback = async (req, res) => {
    try {
        let reportings = await Feedback.findAll({where: {consultationId: req.params.id}})
        if(!reportings) return res.status(400).json({ error: true,err, message: "nous n'avons pas pus récupérer les informations !" })
        res.status(200).json({error: false, reportings })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.storeFeedback = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }
    
        let { type, description, isCompleted, consultationId } = req.body;
    
        Feedback.create({ type, description, isCompleted, consultationId  })
        .then( (feedback) => {
            res.status(201).json({ error: false, feedback });
        })
        .catch((err) => res.status(400).json({ error: true, err, message: 'Please check the data for feedback' }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.showOneFeedback = async (req, res) => {
    try {
        let feedback = await Feedback.findByPk(req.params.id, {include: [{model: Consultation, include: [{model: Medecin} , {model: Patient}, {model: VideoCall}]  } ]});
        res.status(200).json({error: false, feedback})
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }      
}
