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
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

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
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

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
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

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
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

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
  corrects_sentences
};