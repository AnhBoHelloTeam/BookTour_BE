const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true }, // Mô tả chi tiết hotel
  image_url: { type: String, required: true }, // URL hình ảnh (có thể là array nếu nhiều ảnh: [String])
  price_per_night: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 5 },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Hotel', hotelSchema);