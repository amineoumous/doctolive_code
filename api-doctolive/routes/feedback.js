const express = require('express');
const FeedbackController = require('./../controllers/FeedbackController');
const {  body } = require('express-validator');

const router = express.Router();

router.get('', FeedbackController.getAllfeedback);
router.get('/consultation/:id', FeedbackController.getAllOneConsultationFeedback);

  router.post('', [
    body('type')
    .isString()
    .isLength({ min: 2}),
    body('description')
    .isString()
    .isLength({ min: 2}),
    body('isCompleted').isBoolean(),
  ], FeedbackController.storeFeedback);

// router.put('/:id', [
//   body('name')
//     .isString()
//     .isLength({ min: 2}),
//     body('active').isBoolean().optional(),
// ], FeedbackController.updateSpecialite);

router.get('/:id', FeedbackController.showOneFeedback);

module.exports = router;