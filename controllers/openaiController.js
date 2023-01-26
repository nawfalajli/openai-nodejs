const {
  Configuration,
  OpenAIApi
} = require('openai');

const configuration = new Configuration({
  apiKey: process.env.TOKEN_SECRET
});
const openai = new OpenAIApi(configuration);


//generate image
const generate_image = async (req, res) => {
  const {
    prompt,
    size
  } = req.body;

  const imageSize =
    size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

  try {
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: 'The image could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};

//Answer questions based on existing knowledge.
const answer_questions = async (req, res) => {
  const {
    prompt
  } = req.body;


  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};

//Create product names from examples words. Influenced by a community prompt.
const product_names = async (req, res) => {
  const {
    prompt
  } = req.body;


  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Product names from " + prompt,
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};


//Corrects sentences into standard English
const corrects_sentences = async (req, res) => {
  const {
    prompt
  } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Correct this to standard English: " + prompt,
      temperature: 0,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};

//Translate natural language to SQL queries
const text_to_sqlquery = async (req, res) => {
  const {
    prompt
  } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: "### SQL tables, with their properties:\n#\n# " + prompt,
      temperature: 0,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["#", ";"],
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};


//Extract keywords from a block of text
const text_to_keywords = async (req, res) => {
  const {
    prompt
  } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: "Extract keywords from this text:\n\n" + prompt,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.8,
      presence_penalty: 0.0,
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};

//Convert simple JavaScript expressions into Python.
const javascript_to_python = async (req, res) => {
  const {
    prompt
  } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "code-davinci-002",
      prompt: "#JavaScript to Python:\nJavaScript: \n" + prompt + "\n\nPython:",
      temperature: 0,
      max_tokens: 64,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};

//Provide a topic and get study notes
const get_study_notes = async (req, res) => {
  const {
    prompt
  } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "What are 10 key points I should know when " + prompt,
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};

//Create interview questions.
const interview_questions = async (req, res) => {
  const {
    prompt
  } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Create a list of questions for my interview from " + prompt,
      temperature: 0.5,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};

//SQL request
const sql_request = async (req, res) => {
  const {
    prompt
  } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "Create a SQL request : " + prompt,
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);

    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};


//Write a Python docstring
const python_docstring = async (req, res) => {
  const {
    prompt
  } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: "python docstring from : " + prompt,
      temperature: 0.3,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    res.status(200).send({
      success: true,
      data: response.data,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error: 'The text could not be generated, plz update you openAI key from https://beta.openai.com/account/api-keys',
    });
  }
};
module.exports = {
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
};