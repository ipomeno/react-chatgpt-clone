const OpenAiApi = require('../config/openai.js');

async function sendPrompt(request, response) {
  try {
    const { prompt } = request.body;
    let result = await OpenAiApi.generateText({prompt});
    return response.status(200).json({ 
      success: true,
      data: result
    });
  }
  catch(error) {
    return response.status(500).json({
      success: false,
      error: error.message
    });
  }
}

module.exports = { sendPrompt };