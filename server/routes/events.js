const express = require('express');
const { getEvents, postEvent } = require('../controllers/events.js');

const router = express.Router();

router.get('/', getEvents);
router.post('/', postEvent);

module.exports = router;