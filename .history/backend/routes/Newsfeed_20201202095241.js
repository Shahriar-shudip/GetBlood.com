const express = require('express');
const router = express.Router();
const NewsfeedController = require('../controllers/Newsfeed')
router.get('/feed' , NewsfeedController.getFeed)
router.post('/createPost' , NewsfeedController.createPost)
module.exports = router ;
