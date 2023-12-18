const dbpool = require('../config/database');

// menampilkan semua artikel
async function getAllArticles() {
  try {
    const SQLQuery = 'SELECT * FROM articles';
    const [rows] = await dbpool.execute(SQLQuery);
    return rows;
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
}

// menampilkan semua nama kategori
async function getDistinctCategories() {
  try {
    const SQLQuery = 'SELECT DISTINCT kategori FROM articles';
    const [rows] = await dbpool.execute(SQLQuery);
    const categories = rows.map((row) => row.kategori);
    return categories;
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
}

// mencari artikel berdasarkan kategori
async function getArticlesByCategory(kategori) {
  try {
    const SQLQuery = 'SELECT * FROM articles WHERE kategori = ?';
    const values = [kategori];
    const [rows] = await dbpool.execute(SQLQuery, values);

    if (rows.length === 0) {
      throw new Error('No articles found with the specified category');
    } else {
      return rows;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
}

// menampilkan artikel berdasarkan ID
async function getArticleById(id) {
  try {
    const SQLQuery = 'SELECT * FROM articles WHERE id = ?';
    const values = [id];
    const [rows] = await dbpool.execute(SQLQuery, values);

    if (rows.length === 0) {
      throw new Error('Article not found');
    } else {
      return rows[0];
    }
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
}

// Mencari artikel berdasarkan jenis hewan (kata pertama)
async function getArticlesByAnimalType(animalType) {
  try {
    const SQLQuery = 'SELECT * FROM articles WHERE jenis_hewan LIKE ?';
    const values = [`${animalType}%`];
    const [rows] = await dbpool.execute(SQLQuery, values);

    if (rows.length === 0) {
      throw new Error('No articles found with the specified animal type');
    } else {
      return rows;
    }
  } catch (error) {
    console.error(error);
    throw new Error('Internal server error');
  }
}

module.exports = {
  getAllArticles,
  getDistinctCategories,
  getArticlesByCategory,
  getArticleById,
  getArticlesByAnimalType,
};