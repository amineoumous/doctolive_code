const Specialite = require('./../models/specialite');
const {  validationResult} = require('express-validator');


exports.getAllSpecialites = async (req, res) => {
    try {
        let categories = await Specialite.findAll()
        if(!categories) return res.status(400).json({ error: true,err, message: "nous n'avons pas pus récupérer les informations des catégories !" })
        res.status(200).json({error: false, categories })
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
    
        let { name, annee, link, } = req.body;
    
        Specialite.create({
            name,
            annee,
            link,
        })
        .then( (category) => {
            res.status(201).json({ error: false, category });
        })
        .catch((err) => res.status(400).json({ error: true, err, message: 'Please check the data for category' }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.updateSpecialite = (req, res) => {
    try {
        let { name, annee, link, } = req.body;

        Specialite.update({
            name,
            annee,
            link,
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
        let category = await Specialite.findByPk(req.params.id);
        res.status(200).json({error: false, category})
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }      
}
