const express = require('express');
const router = express.Router();
const Location = require('../models/Location');

router.get('/', async (req, res) => {
  try { res.json(await Location.find()); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.post('/', async (req, res) => {
  try { const location = new Location(req.body); await location.save(); res.status(201).json(location); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.put('/:id', async (req, res) => {
  try { const location = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(location); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.delete('/:id', async (req, res) => {
  try { await Location.findByIdAndDelete(req.params.id); res.status(204).send(); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;