const express = require('express');
const router = express.Router();
const { context, sql } = require('./context');
// const {sql} = require('./config/db1');
// Get all users
router.get('/users', async (req, res) => {
    try {
        const result = await context.get('SELECT * FROM tbl_users');
        res.json(result);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;