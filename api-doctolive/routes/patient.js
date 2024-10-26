const express = require('express');
const PatientController = require('./../controllers/PatientController');
const {  body } = require('express-validator');

const router = express.Router();
const Patient = require('../models/patient')

const haveAuthorisation = require('./../middleware/haveAuthorisation')
const verifAuth = require('./../middleware/auth')


    router.get('',  PatientController.getAllElement);
    router.get('/info', verifAuth, PatientController.getAuthUser);
    router.get('/appointments', verifAuth, PatientController.getUserAppintoments);
    router.get('/documents', verifAuth, PatientController.getUserDocuments);
    router.get('/proches', verifAuth, PatientController.getUserProches);
    router.get('/appointments/venir', verifAuth, PatientController.getUserNextAppintoments);
    router.get('/appointments/historique', verifAuth, PatientController.getUserOldAppintoments);
    router.get('/verify', verifAuth, PatientController.verifAuthUser);
    router.get('/generer-link', verifAuth, PatientController.generationLink);
    router.get('/:id', PatientController.getOneElement);
    router.get('/consultation/:id', PatientController.getOneElementWithConsultation);
    router.get('/confirm/:token', PatientController.confirmPatient);

    router.post('/consultation', verifAuth, PatientController.addConsultation);
    router.post('/proche', verifAuth, PatientController.addProche);
    router.put('/new-password', verifAuth, PatientController.newPassword);

    router.post('',[
        body('nom').isString().isLength({ min: 3}),
        body('password').isString().isLength({ min: 6}),
        body('prenom').isString().isLength({ min: 3}),
        body('email_confirmation').isEmail().trim(),
        body('email')
        .isEmail()
        .trim()
        .custom(async (value, { req }) => {
            const check = req.body.email_confirmation === value;

            if(!check) throw new Error("Adresse émail de confirmation n'est pas compatible");
            const existingPhone = await Patient.findOne({where:{email: value }})
            if(existingPhone){
                throw new Error('Adresse émail déjà utilisé');
            }
        }),
        body('phone')
        .isLength({ min: 10})
        .custom(async (value) => {
            const existingPhone = await Patient.findOne({where:{phone: value }})
            if(existingPhone){
                throw new Error('Adresse émail déjà utilisé');
            }
        })
    ], PatientController.storeElement);

    router.post('/create',[
        body('nom').isString().isLength({ min: 3}),
        body('password').isString().isLength({ min: 6}),
        body('prenom').isString().isLength({ min: 3}),
        body('email')
        .isEmail()
        .trim()
        .custom(async (value) => {
            const existingPhone = await Patient.findOne({where:{email: value }})
            if(existingPhone){
                throw new Error('Adresse émail déjà utilisé');
            }
        }),
        body('phone')
        .isLength({ min: 2})
        .custom(async (value) => {
            const existingPhone = await Patient.findOne({where:{phone: value }})
            if(existingPhone){
                throw new Error('Numéro de téléphone déjà utilisé');
            }
        })
    ], PatientController.storeElement);

    router.put('/:id',[
        body('nom').isString().isLength({ min: 3}),
        body('prenom').isString().isLength({ min: 3}),
        body('email')
        .isEmail()
        .trim(),
        body('phone')
        .isLength({ min: 10})
    ],
    verifAuth,
    haveAuthorisation.isPatientOrAdmin,
    PatientController.updateElement);

    router.put('',[
        body('nom').isString().isLength({ min: 3}),
        body('prenom').isString().isLength({ min: 3}),
        body('email')
        .isEmail()
        .trim(),
        body('phone')
        .isLength({ min: 10})
    ],
    verifAuth,
    haveAuthorisation.isPatient,
    PatientController.updateThisUSer);

    router.post('/auth',[
        body('email')
        .isEmail()
        .trim(),
        body('password')
        .isLength({ min: 2})
    ], PatientController.authPatient);

    router.post('/verif', verifAuth, PatientController.authPatient);


    router.delete('/:id', verifAuth, haveAuthorisation.isAdmin, PatientController.deleteElement);

    router.patch('/activate/:id',verifAuth, haveAuthorisation.isAdmin, PatientController.validatePatient);
    router.patch('/inactivate/:id',verifAuth, haveAuthorisation.isAdmin, PatientController.inactivatePatient);
    router.patch('/deblock/:id',verifAuth, haveAuthorisation.isAdmin, PatientController.deblockPatient);


module.exports = router;