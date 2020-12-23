const router = require('express').Router();
const { 
  getAbout, 
  addAbout, 
  getAboutById,
  updateAbout,
  deleteAbout
} = require('../controllers/aboutCtrl');

// get about
router.get('/about', getAbout);

// add about
router.post('/about', addAbout);

// get specific about by id
router.get('/about/:id', getAboutById);

// update specific about by id
router.put('/about/update/:id', updateAbout);

// delete specific about by id
router.delete('/about/:id', deleteAbout);

module.exports = router;