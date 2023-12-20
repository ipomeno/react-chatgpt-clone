import axios from 'axios';

const URL_API = 'http://localhost:4000/api/prompt';

const makeRequest = async (prompt) => {
  const response = await axios.post(URL_API, { prompt });
  return response.data;
}

export { makeRequest };