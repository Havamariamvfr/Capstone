const express = require('express');
const router = express.Router();
const articleController = require('../controller/articles');

// Endpoint untuk menampilkan semua artikel
router.get('/', articleController.getAllArticles);

// Endpoint untuk menampilkan semua nama kategori
router.get('/categories', articleController.getDistinctCategories);

// Endpoint untuk mencari artikel berdasarkan kategori
router.get('/categories/:kategori', articleController.getArticlesByCategory);

// Endpoint untuk menampilkan artikel berdasarkan ID
router.get('/:id', articleController.getArticleById);

// Endpoint untuk mencari artikel berdasarkan jenis hewan (kata pertama)
router.get('/animal/:animalType', articleController.getArticlesByAnimalType);


module.exports = router;