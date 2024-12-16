const express = require('express');
const { getLibraries, getLibrary, createLibrary, updateLibrary, deleteLibrary } = require('../controllers/library.controller');
const router = express.Router();

router.get('/', getLibraries);
router.get('/:id', getLibrary);
router.post("/", createLibrary);
router.put("/:id", updateLibrary);
router.delete("/:id", deleteLibrary);

module.exports = router;