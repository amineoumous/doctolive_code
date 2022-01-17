const express = require('express');
const ConsultationController = require('./../controllers/ConsultationController');
const {  body } = require('express-validator');

const router = express.Router();
const Patient = require('../models/patient')

const haveAuthorisation = require('./../middleware/haveAuthorisation')
const verifAuth = require('./../middleware/auth')


    router.get('', verifAuth, ConsultationController.getAllElement);
    router.get('/:id', verifAuth, ConsultationController.getOneElement);
    router.post('/videocall/:id', verifAuth, ConsultationController.storeVideocall);
    router.post('/abscence/:id', verifAuth, ConsultationController.abscence);
    router.put('/videocall/:id', verifAuth, ConsultationController.endVideocall);
    router.patch('/close/:id', verifAuth, ConsultationController.closeConsultation);
    router.get('/medecin-calendar/:idMedecin/:date', ConsultationController.getMedecinCalendar);
    router.patch('/cancel/:id', verifAuth, ConsultationController.cancelConsultation);
    router.patch('/deplacer/:id', verifAuth, ConsultationController.changeDate);
    

module.exports = router;