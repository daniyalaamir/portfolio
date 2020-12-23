const mongoose = require('mongoose');

// data that we want to send to mongodb
const experienceSchema = new mongoose.Schema({
  experience: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('experience', experienceSchema);