const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');

router.get('/', async (req, res) => {
  try { res.json(await Ticket.find()); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.post('/', async (req, res) => {
  try { const ticket = new Ticket(req.body); await ticket.save(); res.status(201).json(ticket); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.put('/:id', async (req, res) => {
  try { const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true }); res.json(ticket); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});
router.delete('/:id', async (req, res) => {
  try { await Ticket.findByIdAndDelete(req.params.id); res.status(204).send(); } catch (err) { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;