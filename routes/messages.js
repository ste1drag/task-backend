const express = require('express');
const router = express.Router();
const connection = require('../config/db.config');
const messageController = require('../controllers/messageController');

router.post('/',messageController.postMessage);
router.get('/',messageController.getMessages);

module.exports = router;