const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

router.get('/', async (req, res) => {
  try { res.json(await Hotel.find()); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.post('/', async (req, res) => {
  try { const hotel = new Hotel(req.body); await hotel.save(); res.status(201).json(hotel); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.put('/:id', async (req, res) => {
  try { const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(hotel); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.delete('/:id', async (req, res) => {
  try { await Hotel.findByIdAndDelete(req.params.id); res.status(204).send(); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;