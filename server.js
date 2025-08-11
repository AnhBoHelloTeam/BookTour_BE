const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const tourRoutes = require('./routes/tourRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');
const postRoutes = require('./routes/postRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const locationRoutes = require('./routes/locationRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes without authentication
app.use('/api/tours', tourRoutes);
app.use('/api/vehicles', vehicleRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/locations', locationRoutes);

// Redirect to messaging
app.get('/contact', (req, res) => {
  res.redirect('https://m.me/yourpage');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));