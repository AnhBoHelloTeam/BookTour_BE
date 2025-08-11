const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: { type: String, required: true }, // e.g., 'Bà Nà Hills Ticket'
  description: { type: String },
  image_url: { type: String }, // URL hình ảnh vé
  price: { type: Number, required: true },
  location: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ticket', ticketSchema);