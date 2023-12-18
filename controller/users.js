const userModel = require('../models/users');

// menampilkan detail user berdasarkan ID
async function getUserById(req, res) {
  const { id } = req.params;

  try {
    const user = await userModel.getUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    if (error.message === 'User not found') {
      res.status(404).json({ error: 'Pengguna tidak ditemukan' });
    } else {
      res.status(500).json({ error: 'Kesalahan server internal' });
    }
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Kesalahan server internal' });
  }
}

module.exports = {
  getUserById,
  getAllUsers,
};