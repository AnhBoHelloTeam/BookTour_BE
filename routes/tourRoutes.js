const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

router.get('/', async (req, res) => {
  try { res.json(await Tour.find()); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.post('/', async (req, res) => {
  try { const tour = new Tour(req.body); await tour.save(); res.status(201).json(tour); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.put('/:id', async (req, res) => {
  try { const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(tour); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.delete('/:id', async (req, res) => {
  try { await Tour.findByIdAndDelete(req.params.id); res.status(204).send(); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;