const express = require('express');
const router = express.Router();
const authController = require('../controller/auth');

// Endpoint untuk login
router.post('/login', authController.login);

// Endpoint untuk register
router.post('/register', authController.register);

module.exports = router;