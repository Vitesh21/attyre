const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  display_name: String,
  profile_picture_url: String,
  bio: String,
  followers_count: Number,
  verified: Boolean,
});

module.exports = mongoose.model('User', userSchema);
