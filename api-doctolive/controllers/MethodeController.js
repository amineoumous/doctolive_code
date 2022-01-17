const MethodePaiement = require('./../models/methodepaiement');
const {  validationResult} = require('express-validator');
const moment = require('moment')
const fs = require('fs');

exports.getAllMethodePaiement = async (req, res) => {
    try {
        let categories = await MethodePaiement.findAll()
        if(!categories) return res.status(400).json({ error: true,err, message: "nous n'avons pas pus récupérer les informations des catégories !" })
        res.status(200).json({error: false, categories })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.storeMethodePaiement = async (req, res) => {
    try {
        let resultError= validationResult(req).array();

        if(resultError.length > 0){  
            return res.status(400).json({ error: true, message: resultError });
        }
    
        let { name, active, icon, } = req.body;
    
        MethodePaiement.create({
            name,
            active,
            icon,
        })
        .then((category) => {
            res.status(201).json({ error: false, category });
        })
        .catch((err) => res.status(400).json({ error: true, err, message: 'Please check the data for category' }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.updateMethodePaiement = (req, res) => {
    try {
        let { name, active } = req.body;

        MethodePaiement.update({
            name,
            active,
        }, {
            where: { id: req.params.id }
        })
        .then( async () => {
            let updatedMethodePaiement = await MethodePaiement.findByPk(req.params.id)
            res.status(202).json({ error: false, updatedMethodePaiement });
        })
        .catch((err) => res.status(400).json({ error: true, message: "bad request !" }))
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }
}

exports.showOneMethodePaiement = async (req, res) => {
    try {
        let category = await MethodePaiement.findByPk(req.params.id);
        res.status(200).json({error: false, category})
    } catch (error) {
        res.status(500).json({ error: true, message: 'server problem' })
    }      
}


exports.uploadIcon = async (req, res) => {
    try {
        const fileTypes = [
            'jpeg',
            'jpg',
            'pdf',
            'png'
        ];
        if (req.body.data === null || req.body.data === undefined) {
            return res.status(400).json({error: true, msg: 'No file uploaded' });
        }
        var file = req.body.data;
        
        let base64Image = file.split(';base64,').pop();
        
        const ext = file.substring(file.indexOf("/")+1, file.indexOf(";base64"));
        const fileType = file.substring("data:".length,file.indexOf("/"));
        
        // const ext = base64Image.substring(base64Image.indexOf("/")+1, base64Image.indexOf(";base64"));
        
        let fileName = moment().format('YYYY-MM-DD-HH-mm:ss') + "." + ext
          if(req.body.fileType === "image"){
        
            fs.writeFile(`public/categoryimage/${fileName}`, base64Image, {encoding: 'base64'}, (err) => {
              if (err) {
                  console.log(err)
                return res.status(500).json({ error: true, err});
              }
              return res.status(200).json({ error: false, data: { realName: req.body.realName, fileName, fileLink: `/categoryimage/${fileName}` }});
           });
          }else {
              return res.status(400).json({ error: true, msg: "Type de fichier n'est pas acceptable " });
          }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: true, message: 'server problem' })
    }      
}
