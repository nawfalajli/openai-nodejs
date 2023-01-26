const express = require('express');
const {
  generate_image,
  answer_questions,
  product_names,
  corrects_sentences,
  text_to_sqlquery,
  text_to_keywords,
  javascript_to_python,
  get_study_notes,
  interview_questions,
  sql_request,
  python_docstring
} = require('../controllers/openaiController');
const router = express.Router();

router.post('/generate_image', generate_image);
router.post('/answer_questions', answer_questions);
router.post('/product_names', product_names);
router.post('/corrects_sentences', corrects_sentences);
router.post('/text_to_sqlquery', text_to_sqlquery);
router.post('/text_to_keywords', text_to_keywords);
router.post('/javascript_to_python', javascript_to_python);
router.post('/get_study_notes', get_study_notes);
router.post('/interview_questions', interview_questions);
router.post('/sql_request', sql_request);
router.post('/python_docstring', python_docstring);

module.exports = router;