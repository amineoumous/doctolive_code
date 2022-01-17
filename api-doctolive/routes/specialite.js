const express = require('express');
const SpecialiteController = require('./../controllers/SpecialiteController');
const {  body } = require('express-validator');

const router = express.Router();

router.get('', SpecialiteController.getAllSpecialites);

  router.post('', [
    body('name')
    .isString()
    .isLength({ min: 2}),
    body('active').isBoolean().optional(),
  ], SpecialiteController.storeSpecialite);

router.put('/:id', [
  body('name')
    .isString()
    .isLength({ min: 2}),
    body('active').isBoolean().optional(),
], SpecialiteController.updateSpecialite);

router.get('/:id', SpecialiteController.showOneSpecialite);

module.exports = router;