
const express = require('express');
const router = express.Router();
const { context, sql } = require('./context');
// const {sql} = require('./config/db1');
// Get all users
router.get('/users', async (req, res) => {
    try {
        const result = await context.get('SELECT * FROM dbo.department');
        res.json(result);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Get user by user_name
router.get('/users/:user_name', async (req, res) => {
    const { user_name } = req.params;
    try {
        const result = await context.get(
            'SELECT * FROM dbo.department  WHERE user_name = @user_name',
            [
                { name: 'user_name', type: sql.VarChar, value: user_name }
            ]
        );
        res.json(result);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;