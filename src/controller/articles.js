const articleModel = require('../models/articles');

// Menampilkan semua artikel
async function getAllArticles(req, res) {
  try {
    const articles = await articleModel.getAllArticles();

    // Menghapus properti harga jika kosong atau null pada setiap artikel
    const filteredArticles = articles.map((article) => {
      if (!article.harga) {
        return Object.fromEntries(Object.entries(article).filter(([key]) => key !== 'harga'));
      }
      return article;
    });

    res.json(filteredArticles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error memuat artikel' });
  }
}

// menampilkan semua nama kategori
async function getDistinctCategories(req, res) {
  try {
    const categories = await articleModel.getDistinctCategories();
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error memuat artikel' });
  }
}

// Mencari artikelberdasarkan kategori
async function getArticlesByCategory(req, res) {
  const { kategori } = req.params;
  try {
    const articles = await articleModel.getArticlesByCategory(kategori);
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Tidak ada kategori tersebut' });
  }
}

// Menampilkan artikel berdasarkan ID
async function getArticleById(req, res) {
  const { id } = req.params;
  try {
    const article = await articleModel.getArticleById(id);
    res.json(article);
  } catch (error) {
    console.error(error);
    res.status(404).json({ error: 'Artikel tidak ditemukan' });
  }
}

// Mencari artikel berdasarkan jenis hewan
async function getArticlesByAnimalType(req, res) {
  const { animalType } = req.params;
  try {
    const articles = await articleModel.getArticlesByAnimalType(animalType);
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Jenis hewan tidak ditemukan' });
  }
}


module.exports = {
  getAllArticles,
  getDistinctCategories,
  getArticlesByCategory,
  getArticleById,
  getArticlesByAnimalType,
};