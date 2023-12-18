const dbpool = require('../config/database');

async function getUserById(id) {
  try {
    const SQLQuery = 'SELECT * FROM users WHERE id = ?';
    const values = [id];
    const [rows] = await dbpool.execute(SQLQuery, values);

    if (rows.length === 0) {
      throw new Error('User not found');
    } else {
      return rows[0];
    }
  } catch (error) {
    console.error(error);
    if (error.message === 'User not found') {
      throw new Error('User not found');
    } else {
      throw new Error('Internal server error');
    }
  }
}

// Endpoint untuk menampilkan semua user
async function getAllUsers() {
  try {
    const SQLQuery = 'SELECT * FROM users';
    const [rows] = await dbpool.execute(SQLQuery);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
}

module.exports = {
  getUserById,
  getAllUsers,
};