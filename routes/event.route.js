const express = require('express');
const { getEvent, getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/event.controller');
const router = express.Router();

router.get('/', getEvents);
router.get('/:id', getEvent);
router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

module.exports = router;