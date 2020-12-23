const experienceSchema = require('../models/experienceModel');

// get experience
exports.getExperience = (req, res) => {
  // find all the data
  experienceSchema.find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json({
      msg: err
    }))
}

// add experience
exports.addExperience = async (req, res) => {
  const { experience } = req.body;
  try {
    const newExperience = new experienceSchema({
      experience: experience
    })
    await newExperience.save();
    res.json({ msg: 'experience added' })
  } catch(err) {
    res.status(500).json({
      msg: err
    })
  }
}

// get specific experience by id
exports.getExperienceById = (req, res) => {
  experienceSchema.findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => res.status(400).json({
      msg: err
    }))
}

// update specific experience by id
exports.updateExperience = async (req, res) => {
  const { experience } = req.body;
  try {
    const newExperience = await experienceSchema.findByIdAndUpdate(req.params.id, {
      experience: experience
    })
    let result = await newExperience.save();
    await result;
    res.json({ msg: 'experience updated' })
  } catch(err) {
    res.status(500).json({
      msg: err
    })
  }
}

// delete specific experience by id
exports.deleteExperience = async (req, res) => {
  await experienceSchema.findByIdAndDelete(req.params.id)
  res.json({ msg: 'experience deleted' })
}