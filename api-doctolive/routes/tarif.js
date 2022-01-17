const express = require('express');
const TarifController = require('./../controllers/TarifController');
const {  body } = require('express-validator');

const router = express.Router();

router.get('', TarifController.getAllTarifs);

  router.post('', [
    body('name')
    .isString()
    .isLength({ min: 2}),
    body('price').isString().isLength({ min: 2}),
    body('description').isString().optional(),
    body('active').isBoolean().optional(),
  ], TarifController.storeTarif);

router.put('/:id', [
  body('name')
  .isString()
  .isLength({ min: 2}),
  body('price').isString().isLength({ min: 2}),
  body('description').isString().optional(),
  body('active').isBoolean().optional(),
], TarifController.updateTarif);

router.get('/:id', TarifController.showOneTarif);

module.exports = router;
