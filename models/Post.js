const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Tiêu đề bài viết (ví dụ: "Khám phá Hội An")
  content: { type: String, required: true }, // Nội dung giới thiệu
  image_url: { type: String, required: true }, // URL hình ảnh
  tour_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour' }, // Liên kết với Tour (optional)
  vehicle_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle' }, // Liên kết với Vehicle (optional)
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);