const express = require('express');
const promptController = require('../controllers/prompt');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!'});
});

router.get('/send-command', promptController.sendCommand);

module.exports = router;
