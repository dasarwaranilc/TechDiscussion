const express = require('express');
const router = express.Router();
// const {sql, pool} = require('./config/db');
const {sql} = require('./config/db1');
// Get all users
router.get('/users', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM tbl_users`;
        res.json(result.recordset);
    }   catch (err) {       
        res.status(500).send('Server Error');
    }
});

module.exports = router;