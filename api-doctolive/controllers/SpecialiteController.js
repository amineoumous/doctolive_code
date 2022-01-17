const Specialite = require('./../models/specialite');
const {  validationResult} = require('express-validator');


exports.getAllSpecialites = async (req, res) => {
    try {
        let specialities = await Specialite.findAll()
        if(!specialities) return res.status(400).json({ error: true,err, message: "nous n'avons pas pus récupérer les informations !" })
        res.status(200).json({error: false, specialities })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.storeSpecialite = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }
    
        let { name, active } = req.body;
    
        Specialite.create({
            name: name,
            active,
        })
        .then( (specialite) => {
            res.status(201).json({ error: false, specialite });
        })
        .catch((err) => res.status(400).json({ error: true, err, message: 'Please check the data for specialite' }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.updateSpecialite = (req, res) => {
    try {
        let { name, active } = req.body;
        Specialite.update({
            name: name,
            active
        }, {
            where: { id: req.params.id }
        })
        .then( async () => {
            let updatedSpecialite = await Specialite.findByPk(req.params.id)
            res.status(202).json({ error: false, updatedSpecialite });
        })
        .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.showOneSpecialite = async (req, res) => {
    try {
        let specialite = await Specialite.findByPk(req.params.id);
        res.status(200).json({error: false, specialite})
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }      
}
