# OpenAI Node.js

The OpenAI Node.js library provides convenient access to the OpenAI API from Node.js applications.

## Technologies

-  [NodeJS](https://nodejs.org/en/)

-  [OpenAI](https://beta.openai.com/examples)


## Installation

```bash
$ npm install
```
## Run

```bash
$ npm start
```

## Usage

The library needs to be configured with your account's secret key, which is available on the [website](https://beta.openai.com/account/api-keys).

Example
```javascript
const {
       Configuration,
       OpenAIApi
      } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
//Corrects sentences into standard English
const response = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: "Correct this to standard English: " + req.body.prompt,
  temperature: 0,
  max_tokens: 60,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});
```

Corrects sentences into standard English API,

```javascript
Body
{
    "prompt" : "i am pgogrammmer i  haavee nooo lifeeeee"
}
```
Response
```javascript
{
    "success": true,
    "data": {
        "id": "cmpl-6cv2HfGClC0ULXlfAYhUeuC7yWlqy",
        "object": "text_completion",
        "created": 1674733729,
        "model": "text-davinci-003",
        "choices": [
            {
                "text": "\n\nI am a programmer. I have no life.",
                "index": 0,
                "logprobs": null,
                "finish_reason": "stop"
            }
        ],
        "usage": {
            "prompt_tokens": 21,
            "completion_tokens": 12,
            "total_tokens": 33
        }
    }
}
```

# API Doc
# Auth

**generate image.**
```javascript
POST API : /openai/generate_image
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**Answer questions based on existing knowledge.**
```javascript
POST API : /openai/answer_questions
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**Create product names from examples words. Influenced by a community prompt..**
```javascript
POST API : /openai/product_names
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**Corrects sentences into standard English.**
```javascript
POST API : /openai/corrects_sentences
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**Translate natural language to SQL queries.**
```javascript
POST API : /openai/text_to_sqlquery
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**Extract keywords from a block of text.**
```javascript
POST API : /openai/text_to_keywords
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**Convert simple JavaScript expressions into Python..**
```javascript
POST API : /openai/javascript_to_python
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**Provide a topic and get study notes.**
```javascript
POST API : /openai/get_study_notes
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**Create interview questions.**
```javascript
POST API : /openai/interview_questions
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**SQL request.**
```javascript
POST API : /openai/sql_request
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```

**Write a Python docstring.**
```json
POST API : /openai/python_docstring
> Request Body
  {
    prompt : String (*),
    size : String in ["small", "medium", "large"]
  }
```
