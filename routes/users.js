const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
    res.send('register user');
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('authenticate');
});

// Profile
router.get('/profile', (req, res, next) => {
    res.send('profile');
});

module.exports = router;
