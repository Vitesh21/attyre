const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  video_url: String,
  thumbnail_url: String,
  description: String,
  view_count: Number,
  duration: Number,
  created_at: Date,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  likes_count: Number,
  comments_count: Number,
  shares_count: Number,
  is_liked: Boolean,
  is_bookmarked: Boolean,
  music: { type: mongoose.Schema.Types.ObjectId, ref: 'Music' },
  hashtags: [String],
});

module.exports = mongoose.model('Video', videoSchema);
