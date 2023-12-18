const express = require('express');
const router = express.Router();
const userController = require('../controller/users');

// Endpoint untuk menampilkan detail user berdasarkan ID
router.get('/:id', userController.getUserById);

// Endpoint untuk menampilkan semua user
router.get('/', userController.getAllUsers);

module.exports = router;