const OpenAI = require('openai');
const { apiKey } = require('./app');

const openai = new OpenAI({apiKey});

async function generateText({prompt}) {
  prompt = 'Translate the following English text to Portuguese: "Hello World!"';
  const response = await openai.complete({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 100,
  });

  return response.data.choices[0].text.strip();
}

module.exports = { generateText };

/*
generateText('Translate the following English text to French: "{text}"')
  .then(console.log)
  .catch(console.error);
  */