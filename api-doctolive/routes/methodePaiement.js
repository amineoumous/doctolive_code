const express = require('express');
const methodePaiement = require('./../controllers/MethodeController');
const {  body } = require('express-validator');

const router = express.Router();

const MethodePaiement = require('./../models/methodepaiement')

router.get('', methodePaiement.getAllMethodePaiement);

router.post('/upload-icon', methodePaiement.uploadIcon);

  router.post('', [
    body('name')
    .isString()
    .isLength({ min: 2})
    .custom( async (value) => {
      return MethodePaiement.findOne({where:{name: value }}).then(isExiste =>{
          if(isExiste){
              return Promise.reject('name is already existe');
          }
      });
    }),
    body('icon').isString().isLength({ min: 2}),
    body('active').isBoolean().optional(),
  ], methodePaiement.storeMethodePaiement);

router.put('/:id', [
  body('name')
  .isString()
  .isLength({ min: 2}),
  body('icon').isString().isLength({ min: 2}),
  body('active').isBoolean().optional(),
], methodePaiement.updateMethodePaiement);

router.get('/:id', methodePaiement.showOneMethodePaiement);

module.exports = router;