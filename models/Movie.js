const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
     plot: {
      type: String,
    },
    genres: {
      type: Array,
    },
    runtime: {
      type: Number,
    },
    cast: {
      type: Array,
    },
    num_mflix_comments: {
      type: Number,
    },
    poster: {
      type: String,
    },
    title: {
      type: String,
    },
    lastupdated: {
      type: String,
    },
    languages: {
      type: Array,
    },
    released: {
      type: Date,
    },
    directors: {
      type: Array,
    },
     rated: {
      type: String,
    },
     year: {
      type: Number,
    },
     countries: {
      type: Array,
    },
     type: {
      type: String,
    },
     
}
,
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);