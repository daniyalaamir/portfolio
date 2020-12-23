const aboutSchema = require('../models/aboutModel');

// get about
exports.getAbout = (req, res) => {
  // find all the data
  aboutSchema.find()
    .then(response => res.json(response))
    .catch(err => res.status(500).json({
      msg: err
    }))
}

// add about
exports.addAbout = async (req, res) => {
  const { about } = req.body;
  try {
    const newAbout = new aboutSchema({
      about: about
    })
    await newAbout.save();
    res.json(newAbout);
  } catch(err) {
    res.status(500).json({
      msg: err
    })
  }
}

// get specific about by id
exports.getAboutById = (req, res) => {
  aboutSchema.findById(req.params.id)
    .then(response => res.json(response))
    .catch(err => res.status(400).json({
      msg: err
    }))
}

// update specific about by id
exports.updateAbout = async (req, res) => {
  const { about } = req.body;
  try {
    const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {
      about: about
    })
    let result = await newAbout.save();
    await result;
    res.json({ msg: 'item updated' })
  } catch(err) {
    res.status(500).json({
      msg: err
    })
  }
}

// delete specific about by id
exports.deleteAbout = async (req, res) => {
  const about = await aboutSchema.findByIdAndDelete(req.params.id)
  res.json({ msg: 'item deleted' })
}