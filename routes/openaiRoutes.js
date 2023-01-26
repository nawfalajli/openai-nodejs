const express = require('express');
const {
  generate_image,
  answer_questions,
  product_names,
  corrects_sentences
} = require('../controllers/openaiController');
const router = express.Router();

router.post('/generate_image', generate_image);
router.post('/answer_questions', answer_questions);
router.post('/product_names', product_names);
router.post('/corrects_sentences', corrects_sentences);

module.exports = router;