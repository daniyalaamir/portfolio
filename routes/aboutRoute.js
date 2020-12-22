const router = require('express').Router();
const { 
  getAbout, 
  addAbout, 
  getAboutById,
  updateAbout,
  deleteAbout
} = require('../controllers/aboutCtrl');

// get user
router.get('/about', getAbout);

// post user
router.post('/about', addAbout);

// get specific user by id
router.post('/about/:id', getAboutById);

// update specific user by id
router.put('/about/update/:id', updateAbout);

// delete specific user by id
router.delete('/about/:id', deleteAbout);

module.exports = router;