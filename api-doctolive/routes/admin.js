const express = require('express');
const MedecinController = require('./../controllers/MedecinController');
const AdminController = require('./../controllers/AdminController');
const {  body } = require('express-validator');

const router = express.Router();
const Medecin = require('./../models/medecin')


const haveAuthorisation = require('./../middleware/haveAuthorisation')
const verifAuth = require('./../middleware/auth')


    router.get('',  AdminController.getAllElement);
    router.get('/dashbord',  AdminController.getDashbord);

    router.get('/medecin/consultations/:id', verifAuth, AdminController.getThisMedecinConsultation);

    router.post('',verifAuth, haveAuthorisation.isAdmin, MedecinController.storeMedecin);
    router.post('/medecin',verifAuth, haveAuthorisation.isAdmin,[
        body('email')
        .isEmail()
        .custom( async (value) => {
            const existingPhone = await Medecin.findOne({where:{email: value }})
            if(existingPhone){
                throw new Error('existe');
            }
        })
        .trim(),
        body('nom').isString(),
        body('prenom').isString(),
        body('sexe').isString().optional(),
        body('phone')
        .isLength({ min: 10})
        .custom(async (value) => {
            const existingPhone = await Medecin.findOne({where:{phone: value }})
            if(existingPhone){
                throw new Error('Numéro de téléphone éxiste dèjà');
            }
        }),
        body('cityId').isInt(),
    ], AdminController.storeMedecin);

    router.put('/medecin/:id',verifAuth, haveAuthorisation.isAdmin,[
        body('email')
        .isEmail()
        .trim(),
        body('nom').isString(),
        body('prenom').isString(),
        body('sexe').isString().optional(),
        body('phone')
        .isLength({ min: 10}),
        body('cityId').isInt(),
    ], AdminController.updateMedecin);

    router.post('/patient',verifAuth, haveAuthorisation.isAdmin,[
        body('email')
        .isEmail()
        .custom( async (value) => {
            const existingPhone = await Medecin.findOne({where:{email: value }})
            if(existingPhone){
                throw new Error('existe');
            }
        })
        .trim(),
        body('nom').isString(),
        body('prenom').isString(),
        body('phone')
        .isLength({ min: 10})
        .custom(async (value) => {
            const existingPhone = await Medecin.findOne({where:{phone: value }})
            if(existingPhone){
                throw new Error('Numéro de téléphone éxiste dèjà');
            }
        }),
    ], AdminController.storePatient);

    router.put('/patient/:id',verifAuth, haveAuthorisation.isAdmin,[
        body('email')
        .isEmail()
        .trim(),
        body('nom').isString(),
        body('prenom').isString(),
        body('phone')
        .isLength({ min: 10}),
    ], AdminController.updatePatient);


    router.put('/:id',[
        body('nom').isString().isLength({ min: 3}),
        body('prenom').isString().isLength({ min: 3}),
        body('presentation').isString().optional(),
        body('sexe').isString().optional(),
        body('cityId').isInt(),
        body('email')
        .isEmail()
        .trim(),
        body('phone')
        .isLength({ min: 10})
    ],
    verifAuth,
    haveAuthorisation.isAdmin,
    MedecinController.updateMedecin);

    router.patch('/medecin/activate/:id', verifAuth,
    haveAuthorisation.isAdmin, AdminController.validateMedecin);
    router.patch('/medecin/inactivate/:id', verifAuth,
    haveAuthorisation.isAdmin, AdminController.blockeMedecin);
    router.patch('/medecin/deblock/:id', verifAuth,
    haveAuthorisation.isAdmin, AdminController.deblockeMedecin);
    router.delete('/medecin/:id', verifAuth,
    haveAuthorisation.isAdmin, AdminController.deleteMedecin);
    router.delete('/patient/:id', verifAuth,
    haveAuthorisation.isAdmin, AdminController.deletePatient);

    router.get('/:id', AdminController.showOneElement);

module.exports = router;