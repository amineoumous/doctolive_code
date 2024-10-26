const express = require('express');
const MedecinController = require('./../controllers/MedecinController');
const {  body } = require('express-validator');

const router = express.Router();
const Medecin = require('../models/medecin')
// const verifAuth = require('./../middleware/auth')
// const haveAuthorisation = require('./../middleware/haveAuthorisation')
const haveAuthorisation = require('./../middleware/haveAuthorisation')
const verifAuth = require('./../middleware/auth')


    router.get('',  MedecinController.getAllMedecin);

    router.get('/teleconsultation/venir', verifAuth, MedecinController.getThisMedecinNextTeleconsultation);
    router.get('/checkblock/:id', verifAuth, MedecinController.checkBlock);
    router.get('/teleconsultation/passer', verifAuth, MedecinController.getThisMedecinOldTeleconsultation);
    router.get('/teleconsultation', verifAuth, MedecinController.getThisMedecinTeleconsultation);

    router.get('/tarifs', verifAuth, MedecinController.getThisMedecinTarifs);
    router.delete('/tarif/:id', verifAuth, MedecinController.deleteMedecinTarif);
    router.put('/tarif/:id', verifAuth, MedecinController.updateMedecinTarif);
    router.get('/consultation', verifAuth, MedecinController.getThisMedecinConsultation);
    router.post('/consultation', verifAuth, MedecinController.addConsultation);
    router.get('/info', verifAuth, MedecinController.getThisMedecin);
    router.put('/new-password', verifAuth, MedecinController.newPassword);

    router.get('/search/specialite/:value',  MedecinController.getMedecinBySpecialite);
    router.get('/:specialite/:ville',  MedecinController.rechercheMedecin);
    
    router.get('/:id', MedecinController.showOneMedecin);

    router.post('', MedecinController.storeMedecin);
    router.post('/auth',[
       
        body('email')
        .isEmail()
        .trim(),
        body('password')
        .isLength({ min: 2})
    ], MedecinController.AuthMedecin);

    router.post('/specialities', [
        body('specialities')
        .isArray(),
    ], verifAuth, haveAuthorisation.isMedecin, MedecinController.storeMedecinSpecialite);

    router.post('/block', [
        body('patientId')
        .isInt(),
    ], verifAuth, haveAuthorisation.isMedecin, MedecinController.blockPatient);
    
    router.post('/access', [
        // body('specialities')
        // .isArray(),
    ], verifAuth, haveAuthorisation.isMedecin, MedecinController.storeMedecinAccess);
    
    router.post('/experience', [
        body('experiences')
        .isArray(),
    ], verifAuth, haveAuthorisation.isMedecin, MedecinController.storeMedecinExperience);
    
    router.post('/tarif', [
        body('pricings')
        .isArray(),
    ], verifAuth, haveAuthorisation.isMedecin, MedecinController.storeMedecinTarifs);
    
    
    router.post('/horaire', verifAuth, haveAuthorisation.isMedecin, MedecinController.storeMedecinHoraire);
    
    router.put('/:id',[
        body('nom').isString().isLength({ min: 3}),
        body('prenom').isString().isLength({ min: 3}),
        // body('rpps').isString().optional(),
        // body('adeli').isString().optional(),
        // body('dureeTeleconsultation').isString().optional(),
        // body('dureeConsultation').isString().optional(),
        body('presentation').isString().optional(),
        body('sexe').isString().optional(),
        body('cityId').isInt(),
        body('email')
        .isEmail()
        .trim(),
        body('phone')
        .isLength({ min: 2})
    ],
    verifAuth,
    haveAuthorisation.isMedecin,
    MedecinController.updateMedecin);

    router.delete('/hour/:id', MedecinController.deleteHour);
    router.put('/hour/:id', MedecinController.updateHour);

module.exports = router;