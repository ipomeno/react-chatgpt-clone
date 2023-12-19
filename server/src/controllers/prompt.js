const OpenAiApi = require('../config/openai.js');

async function sendCommand(request, response) {
  const { prompt } = request.body;
  let result = await OpenAiApi.generateText({prompt});
  response.status(200).json({ result });
}

module.exports = { sendCommand };