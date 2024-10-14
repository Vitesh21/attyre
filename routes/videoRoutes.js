const express = require('express');
const { getVideos } = require('../controllers/videoController');
const cache = require('../middleware/paginate');

const router = express.Router();

router.get('/videos', cache, getVideos);

module.exports = router;
