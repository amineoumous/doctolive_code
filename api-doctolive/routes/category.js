const express = require('express');
const CategoryController = require('./../controllers/CategoryController');
const {  body } = require('express-validator');

const router = express.Router();

const Category = require('./../models/category')
const haveAuthorisation = require('./../middleware/haveAuthorisation')
const verifAuth = require('./../middleware/auth')


router.get('', CategoryController.getAllCategories);

router.post('/upload-icon', CategoryController.uploadIcon);

  router.post('', [
    body('name')
    .isString()
    .isLength({ min: 2})
    .custom( async (value) => {
      return Category.findOne({where:{name: value }}).then(isExiste =>{
          if(isExiste){
              return Promise.reject('name is already existe');
          }
      });
  }),
    body('sousCategory').isArray().optional(),
    body('icon').isString().isLength({ min: 2}),
    body('active').isBoolean().optional(),
  ], verifAuth, haveAuthorisation.general, CategoryController.storeCategory);

router.put('/:id', [
  body('name')
  .isString()
  .isLength({ min: 2}),
  body('sousCategory').isArray().optional(),
  body('icon').isString().isLength({ min: 2}),
  body('active').isBoolean().optional(),
], verifAuth, haveAuthorisation.general, CategoryController.updateCategory);

router.put('/sous-category/:id', [
  body('name')
  .isString()
  .isLength({ min: 2}),
  body('icon').isString().isLength({ min: 2}),
  body('active').isBoolean().optional(),
], verifAuth, haveAuthorisation.general, CategoryController.updateSousCategory);

router.get('/:id', CategoryController.showOneCategory);
router.get('/sous-category/:id', CategoryController.showOneSousCategory);


router.patch('/activate/:id', verifAuth, haveAuthorisation.general, CategoryController.activateCategory);

router.patch('/inactivate/:id', verifAuth, haveAuthorisation.general, CategoryController.inactivateCategory);

module.exports = router;