const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// Dashboard
router.get('/members', ensureAuthenticated, (req, res) =>
    res.render('members', {
        user: req.user
    })
);

module.exports = router;