const joi = require('@hapi/joi');

// ID
const movieIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
// Title
const movieTitleSchema = joi.string().max(80);
// Year
const movieYearSchema = joi.number().min(1888).max(2077);
// Cover
const movieCoverSchema = joi.string().uri();
// Description
const movieDescriptionSchema = joi.string().max(300);
// Duration
const movieDurationSchema = joi.number().min(1).max(300);
// Content Rating
const movieContentRatingSchema = joi.string().max(5);
// Source
const movieSourceSchema = joi.string().uri();
// Tags
const movieTagsSchema = joi.array().items(joi.string().max(50));

const createMovieSchema = {
  title: movieTitleSchema.required(),
  year: movieYearSchema.required(),
  cover: movieCoverSchema.required(),
  description: movieDescriptionSchema.required(),
  duration: movieDurationSchema.required(),
  contentRating: movieContentRatingSchema.required(),
  source: movieSourceSchema.required(),
  tags: movieTagsSchema,
};

const updateMovieSchema = {
  title: movieTitleSchema,
  year: movieYearSchema,
  cover: movieCoverSchema,
  description: movieDescriptionSchema,
  duration: movieDurationSchema,
  contentRating: movieContentRatingSchema,
  source: movieSourceSchema,
  tags: movieTagsSchema,
};

module.exports = {
  movieIdSchema,
  createMovieSchema,
  updateMovieSchema,
};
