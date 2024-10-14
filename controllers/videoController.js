const Video = require('../models/Video');

exports.getVideos = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const videos = await Video.find()
      .populate('user')
      .populate('products')
      .populate('music')
      .limit(parseInt(limit))
      .skip((page - 1) * limit)
      .exec();

    const totalVideos = await Video.countDocuments();
    res.json({
      videos,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total_pages: Math.ceil(totalVideos / limit),
        total_videos: totalVideos,
        next_cursor: page < Math.ceil(totalVideos / limit) ? parseInt(page) + 1 : null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
