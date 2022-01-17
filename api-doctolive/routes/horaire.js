const express = require('express');
const HoraireController = require('./../controllers/HoraireController');
const {  body } = require('express-validator');

const router = express.Router();

router.get('', HoraireController.getAllHoraires);

  router.post('', [
    body('jour')
    .isString()
    .isLength({ min: 2}),
    body('debutMatin').isString().isLength({ min: 2}),
    body('finMatin').isString().optional(),
    body('debutSoir').isString().optional(),
    body('finSoir').isString().optional(),
  ], HoraireController.storeHoraire);

router.put('/:id', [
  body('jour')
  .isString()
  .isLength({ min: 2}),
  body('debutMatin').isString().isLength({ min: 2}),
  body('finMatin').isString().optional(),
  body('debutSoir').isString().optional(),
  body('finSoir').isString().optional(),
], HoraireController.updateHoraire);

router.get('/:id', HoraireController.showOneHoraire);

module.exports = router;
