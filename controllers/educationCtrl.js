const educationSchema = require('../models/educationModel');

// get education
exports.getEducation = (req, res) => {
  // find all the data
  educationSchema.find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json({
      msg: err
    }))
}

// add education
exports.addEducation = async (req, res) => {
  const { education } = req.body;
  try {
    const newEducation = new educationSchema({
      education: education
    })
    await newEducation.save();
    res.json(newEducation);
  } catch(err) {
    res.status(500).json({
      msg: err
    })
  }
}

// get specific education by id
exports.getEducationById = (req, res) => {
  educationSchema.findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => res.status(400).json({
      msg: err
    }))
}

// update specific education by id
exports.updateEducation = async (req, res) => {
  const { education } = req.body;
  try {
    const newEducation = await educationSchema.findByIdAndUpdate(req.params.id, {
      education: education
    })
    let result = await newEducation.save();
    await result;
    res.json({ msg: 'item updated' })
  } catch(err) {
    res.status(500).json({
      msg: err
    })
  }
}

// delete specific education by id
exports.deleteEducation = async (req, res) => {
  await educationSchema.findByIdAndDelete(req.params.id)
  res.json({ msg: 'item deleted' })
}