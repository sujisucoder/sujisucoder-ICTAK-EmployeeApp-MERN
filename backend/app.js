const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();
require('./database/connection');

// const dataRoutes = require('./routes/employeeRoutes');
const viewData = require('./routes/viewRoutes');
const authRoutes = require('./routes/auth');
const employeeRoute = require('./routes/employeeRoutes');

const app = express();
const cors = require('cors');

// Middleware
app.use(express.static(path.join(__dirname, '/build')));
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
// app.use('/admin', dataRoutes);
app.use('/admin', employeeRoute);
app.use('/user', viewData);
app.use('/auth', authRoutes);

// Serve React build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'));
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});