
const City = require('./../models/city');


const {  validationResult} = require('express-validator');

exports.getAllHoraires = (req, res) => {
    try {
        City.findAll()
        .then((cities) => {
            res.status(200).json({error: false, cities })
        })
        .catch(err => res.status(401).json({ error: true, message: 'can not find City' }));
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
}

exports.storeHoraire = (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }
    
        let { 
            jour,
            debutMatin,
            finMatin,
            debutSoir,
            finSoir,
        } = req.body;
    
        City.create({
            jour,
            debutMatin,
            finMatin,
            debutSoir,
            finSoir,
        })
        .then((city) => {
            res.status(201).json({ error: false, city });
        })
        .catch((err) => res.status(400).json({ error: true, message: 'Please check the data for City' }))    
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
   
}

exports.updateHoraire = (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }
        if(!req.params.id) return res.status(400).json({ error: true, updatedCity:{}, message:"identifiant de la ville n'est pas était envoyé" })
        let { 
            jour,
            debutMatin,
            finMatin,
            debutSoir,
            finSoir,
        } = req.body;

        City.update({
            jour,
            debutMatin,
            finMatin,
            debutSoir,
            finSoir,
        }, {
            where: { id: req.params.id }
        })
        .then( async () => {
            let updatedCity = await City.findByPk(req.params.id);
           
            if(!updatedCity) return res.status(400).json({ error: true, updatedCity:{}, message:"la ville modifier est introuvabe" })
            res.status(202).json({ error: false, updatedCity })
        })
        .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
  
}

exports.showOneHoraire = async (req, res) => {
    try {
        City.findByPk(req.params.id)
       .then(city => res.status(200).json({error: false, city}))
       .catch(err => res.status(404).json({ error: true, message: 'City not found' })) 
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' });
    }
          
}
