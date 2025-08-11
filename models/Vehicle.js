const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., '4-seat', '16-seat'
  capacity: { type: Number, required: true },
  description: { type: String }, // Mô tả xe
  image_url: { type: String }, // URL hình ảnh xe
  status: { type: String, default: 'available' },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Vehicle', vehicleSchema);