const express = require('express');
const AuthController = require('./../controllers/AuthController');
const {  body } = require('express-validator');

const Medecin = require('./../models/medecin')
const Admin = require('./../models/admin')
const router = express.Router();

const { sendMail } = require('./../util/emailSender')

router.post('/medecin/signup',[
    body('email')
    .isEmail()
    .custom( async (value) => {
        const existingPhone = await Medecin.findOne({where:{email: value }})
        if(existingPhone){
            throw new Error('existe');
        }
    })
    .trim(),
    body('password').isLength({ min: 4}),
    body('nom').isString(),
    body('prenom').isString(),
    body('image').isString().optional(),
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
], AuthController.sginIn);

router.post('/admin/signup',[
    body('email')
    .isEmail()
    .custom( async (value) => {
        const existingPhone = await Admin.findOne({where:{email: value }})
        if(existingPhone){
            throw new Error('existe');
        }
    })
    .trim(),
    body('password').isLength({ min: 4}),
    body('fullName').isString(),
    
], AuthController.sginIn);


router.post('/admin/signin',[
    body('email')
    .isEmail()
    .trim(),
    body('password')
    .isLength({ min: 2})
], AuthController.AuthAdmin);

router.get('/', async (req, res, next) => {
    // console.log('test mail')
    return res.json({source: "api doctolive"});
        let message = {
            from: 'contact@doctolive.ma',
            to: "adnanerouhi@gmail.com",
            subject: "Information créer",  
            html: `<h1> bien reçu </h1>`,
        };
        try {
        //     let response = await sendMail(message);
        //     console.log(response)
        //     if(!response) return res.json({message: "email problem", response});
        //    let emailSent= true;
        //    if(response.error){
        //        emailSent = false;
        //    }
        } catch (error) {
            return res.json({source: "api doctolive", error});

        }
        
       
});


module.exports = router;