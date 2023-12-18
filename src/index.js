require('dotenv').config();
const PORT = process.env.PORT || 5000;
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/users');
const articlesRoutes = require('./routes/articles');

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/articles', articlesRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan pada port ${PORT}`);
});