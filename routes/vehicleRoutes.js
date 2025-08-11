const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

router.get('/', async (req, res) => {
  try { res.json(await Vehicle.find()); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.post('/', async (req, res) => {
  try { const vehicle = new Vehicle(req.body); await vehicle.save(); res.status(201).json(vehicle); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.put('/:id', async (req, res) => {
  try { const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(vehicle); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.delete('/:id', async (req, res) => {
  try { await Vehicle.findByIdAndDelete(req.params.id); res.status(204).send(); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;