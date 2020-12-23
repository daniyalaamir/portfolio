const router = require('express').Router();
const { 
  getEducation, 
  addEducation, 
  getEducationById,
  updateEducation,
  deleteEducation
} = require('../controllers/educationCtrl');

// get education
router.get('/education', getEducation);

// add education
router.post('/education', addEducation);

// get specific education by id
router.get('/education/:id', getEducationById);

// update specific education by id
router.put('/education/update/:id', updateEducation);

// delete specific education by id
router.delete('/education/:id', deleteEducation);

module.exports = router;