
const Medecin = require('../models/medecin')
const Admin = require('../models/admin')
// const Type = require('./../models/type')

var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const {  validationResult} = require('express-validator');


exports.sginIn = async (req, res) => {
    try {
        let resultError= validationResult(req).array()

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }

        let {
            nom, 
            prenom,
            email, 
            password, 
            phone, 
            image,
            cityId,
        } = req.body;
        // if(password_confirmation !== password) return res.status(400).json({error: true, message: "mot de passe de confirmation n'est pas " });
        const salt = await bcrypt.genSalt(10);
        let hashedPassword = await bcrypt.hash(password, salt);
        if(!hashedPassword) {
            return res.status(400).json({error: true, data: "on peut pa hacher le mot de passe" });
        }
        Medecin.create({ 
            password: hashedPassword, 
            active: 0, 
            nom, 
            prenom,
            email, 
            phone, 
            image,
            cityId,
        })
        .then(user => {
            var token = jwt.sign(
                { 
                id: user.id, 
                typeId: user.typeId 
                },
                process.env.TOKEN_SECRET,
            );
            delete user.dataValues.password;
            delete user._previousDataValues.password;

            res.status(200).header('auth-token', token).json({error: false, user, token });
        })
        .catch(err => {
            res.status(400).json({error: true, data: err });
        }) 
    } catch (error) {
        res.status(500).json({ error: true, message: "server problem" });
    }
     
};

exports.AuthAdmin = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){
            return res.status(400).json({ error: true, message: resultError });
        }

        let {password, email}= req.body;
        var user = await Admin.findOne({
            where:{email: email }
        });

        if(!user){
            return res.status(400).json({ error: true, message: "email n'éxiste pas" });
        }

        let validPassword = await bcrypt.compare(password, user.dataValues.password);
        if(!validPassword){ 
            return res.status(400).json({ error: true, message: "mot de passe incorrect" });
        }

        var token = jwt.sign(
            {
            id: user.id, 
            type: "admin"
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

