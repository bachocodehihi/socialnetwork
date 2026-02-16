const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Backend is running OK');
});
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
  });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('🚀 Server running on port ' + PORT);
});
