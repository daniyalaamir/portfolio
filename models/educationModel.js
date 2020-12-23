const mongoose = require('mongoose');

// data that we want to send to mongodb
const educationSchema = new mongoose.Schema({
  education: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('education', educationSchema);