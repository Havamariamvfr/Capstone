const authService = require('../models/auth');

//login
async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await authService.login(username, password);
    res.json({ message: 'Login berhasil' });
  } catch (error) {
    console.error(error);
    if (error.message === 'Invalid username or password') {
      res.status(400).json({ error: 'Username atau password tidak valid' });
    } else {
      res.status(500).json({ error: 'Gagal melakukan login' });
    }
  }
}

//register
async function register(req, res, next) {
  try {
    const { username, email, password } = req.body;
    await authService.register(username, email, password);
    res.json({ message: 'Registrasi berhasil' });
  } catch (error) {
    console.error(error);
    if (error.message === 'Username already exists') {
      res.status(400).json({ error: 'Username sudah terdaftar' });
    } else {
      res.status(500).json({ error: 'Gagal melakukan registrasi' });
    }
  }
}

module.exports = {
  login,
  register,
};