const express = require('express');

const {
  getMovies
} = require("../controllers/movie");

const router = express.Router();

// get all users
router.get("/", getMovies);

module.exports = router;