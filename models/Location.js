const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // e.g., 'Hue', 'Da Nang'
  description: { type: String },
  image_url: { type: String }, // URL hình ảnh địa điểm
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Location', locationSchema);