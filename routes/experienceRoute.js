const router = require('express').Router();
const { 
  getExperience, 
  addExperience, 
  getExperienceById,
  updateExperience,
  deleteExperience
} = require('../controllers/experienceCtrl');

// get experience
router.get('/experience', getExperience);

// add experience
router.post('/experience', addExperience);

// get specific experience by id
router.get('/experience/:id', getExperienceById);

// update specific experience by id
router.put('/experience/update/:id', updateExperience);

// delete specific experience by id
router.delete('/experience/:id', deleteExperience);

module.exports = router;