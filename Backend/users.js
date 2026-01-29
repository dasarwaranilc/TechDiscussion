
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

// Get user by user_name
router.get('/users/:user_name', async (req, res) => {
    const { user_name } = req.params;
    try {
        const result = await context.get(
            'SELECT * FROM tbl_users WHERE user_name = @user_name',
            [
                { name: 'user_name', type: sql.VarChar, value: user_name }
            ]
        );
        res.json(result);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

// Create a new user
router.post('/users', async (req, res) => {
    const { user_name, pwd, email_id, added_on, added_by, updated_on, updated_by, is_active, user_role } = req.body;

    try {
        const result = await context.post(
            'INSERT INTO [dbo].[tbl_users] ([user_name] ,[pwd],[email_id],[added_on],[added_by],[updated_on],[updated_by],[is_active],[user_role])VALUES (@user_name, @pwd, @email_id, @added_on, @added_by, @updated_on, @updated_by, @is_active, @user_role)',
            [
                { name: 'user_name', type: sql.VarChar, value: user_name },
                { name: 'pwd', type: sql.VarChar, value: pwd },
                { name: 'email_id', type: sql.VarChar, value: email_id },
                { name: 'added_on', type: sql.DateTime2, value: added_on },
                { name: 'added_by', type: sql.VarChar, value: added_by },
                { name: 'updated_on', type: sql.DateTime2, value: updated_on },
                { name: 'updated_by', type: sql.VarChar, value: updated_by },
                { name: 'is_active', type: sql.VarChar, value: is_active },
                { name: 'user_role', type: sql.VarChar, value: user_role }
            ]
        );
        res.json(result);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.delete('/users/:user_name', async (req, res) => {
    const { user_name } = req.params;
    try {
        const result = await context.delete(
            'DELETE FROM [dbo].[tbl_users] WHERE user_name = @user_name',
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