const OpenAI = require('openai');
const { apiKey } = require('./app');

const openai = new OpenAI({apiKey});

async function generateText({prompt}) {
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    prompt: prompt,
  });

  return completion.choices[0].text.strip();
}

module.exports = { generateText };