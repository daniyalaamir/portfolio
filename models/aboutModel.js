const mongoose = require('mongoose');

// data that we want to send to mongodb
const aboutSchema = new mongoose.Schema({
  about: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('about', aboutSchema);