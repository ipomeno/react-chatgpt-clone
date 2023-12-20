const express = require('express');
const promptController = require('../controllers/prompt');
const router = express.Router();

router.post('/api/prompt', promptController.sendPrompt);

module.exports = router;
