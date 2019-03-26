const express = require('express');
const controller = require('../controllers/index')
const apiController = require('../controllers/api');

const router = express.Router();

router.get('/', controller.getIndex);

router.get('/api/timestamp/:date_string?', apiController.getTimestamp)

router.post('/api/timestamp/:date_string?', apiController.getTimestamp)

module.exports = router;