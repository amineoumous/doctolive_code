const express = require('express');
const router = express.Router();
const CityController = require('../controllers/CityController');
const {  body } = require('express-validator');
const City = require('../models/city')
// const haveAuthorisation = require('../middleware/haveAuthorisation')
// const verifAuth = require('../middleware/auth')


router.get('', CityController.getAllCities);

router.get('/:id', CityController.getOneCity);
router.delete('/:id', CityController.deleteElement);

router.post('', [
    body('name')
    .isString()
    .custom( async (value) => {
        return City.findOne({where:{name: value }}).then(isExiste =>{
            if(isExiste){
                return Promise.reject('name is already existe');
            }
        });
    })
    .trim(),
    body('active').isBoolean().optional(),
], CityController.storeCity);

router.put('/:id', [
    body('name')
    .isString()
    .trim(),
    body('active').isBoolean(),

], CityController.updateCity);

module.exports = router;