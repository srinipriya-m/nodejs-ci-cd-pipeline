const Movie = require("../models/Movie");

const getMovies = async (req, res, next) => {
  try {
    const movies = await Movie.find();

    res.status(200).json({
      success: true,
      movies,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {getMovies};