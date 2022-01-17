const Tarif = require('./../models/tarif');


const {  validationResult} = require('express-validator');

exports.getAllTarifs = (req, res) => {
    try {
        Tarif.findAll()
        .then((cities) => {
            res.status(200).json({error: false, cities })
        })
        .catch(err => res.status(401).json({ error: true, message: 'can not find Tarif' }));
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
}

exports.storeTarif = (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }
    
        let { name, active } = req.body;
    
        Tarif.create({
            name,
            active,
        })
        .then((city) => {
            res.status(201).json({ error: false, city });
        })
        .catch((err) => res.status(400).json({ error: true, message: 'Please check the data for Tarif' }))    
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
   
}

exports.updateTarif = (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }
        if(!req.params.id) return res.status(400).json({ error: true, updatedTarif:{}, message:"identifiant de la ville n'est pas était envoyé" })
        let { name, active } = req.body;

        Tarif.update({
            name,
            active
        }, {
            where: { id: req.params.id }
        })
        .then( async () => {
            let updatedTarif = await Tarif.findByPk(req.params.id);

            if(!updatedTarif) return res.status(400).json({ error: true, updatedTarif:{}, message:"la ville modifier est introuvabe" })
            res.status(202).json({ error: false, updatedTarif })
        })
        .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
  
}

exports.showOneTarif = async (req, res) => {
    try {
        Tarif.findByPk(req.params.id)
       .then(city => res.status(200).json({error: false, city}))
       .catch(err => res.status(404).json({ error: true, message: 'Tarif not found' })) 
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
          
}
