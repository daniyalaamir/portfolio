require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from the server')
});

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listening on port: ${PORT}`);
});