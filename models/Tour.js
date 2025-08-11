const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image_url: { type: String },
  location_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' }, // Thêm liên kết với Location (optional)
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tour', tourSchema);