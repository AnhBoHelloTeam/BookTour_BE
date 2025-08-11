const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
  try { res.json(await Post.find().populate('tour_id vehicle_id')); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.post('/', async (req, res) => {
  try { const post = new Post(req.body); await post.save(); res.status(201).json(post); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.put('/:id', async (req, res) => {
  try { const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(post); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.delete('/:id', async (req, res) => {
  try { await Post.findByIdAndDelete(req.params.id); res.status(204).send(); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;