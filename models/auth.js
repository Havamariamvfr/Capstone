const dbpool = require('../config/database');

// login
async function login(usernameOrEmail, password) {
  try {
    const SQLQuery = 'SELECT * FROM users WHERE (username = ? OR email = ?) AND password = ?';
    const values = [usernameOrEmail, usernameOrEmail, password];
    const [rows] = await dbpool.execute(SQLQuery, values);

    if (rows.length === 0) {
      throw new Error('Invalid username or password');
    } else {
      return rows[0];
    }
  } catch (error) {
    console.error(error);
    if (error.message === 'Invalid username or password') {
      throw error; // Melempar kesalahan yang spesifik
    } else {
      throw new Error('Internal server error');
    }
  }
}

// register
async function register(username, email, password) {
  try {
    const checkUsernameQuery = 'SELECT * FROM users WHERE username = ?';
    const [usernameRows] = await dbpool.execute(checkUsernameQuery, [username]);

    if (usernameRows.length > 0) {
      throw new Error('Username already exists');
    }

    const SQLQuery = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    const values = [username, email, password];
    await dbpool.execute(SQLQuery, values);
  } catch (error) {
    console.error(error);
    if (error.message === 'Username already exists') {
      throw error; // Melempar kesalahan yang spesifik
    } else {
      throw new Error('Internal server error');
    }
  }
}

module.exports = {
  login,
  register,
};