const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET all items
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM Items');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET item by ID
router.get('/:id', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM Items WHERE id = @id', {
      id: req.params.id
    });
    res.json(result.recordset[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create item
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    await db.query('INSERT INTO Items (name) VALUES (@name)', { name });
    res.status(201).json({ message: 'Item created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PUT update item
router.put('/:id', async (req, res) => {
  try {
    const { name } = req.body;
    await db.query('UPDATE Items SET name = @name WHERE id = @id', {
      id: req.params.id,
      name
    });
    res.json({ message: 'Item updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE item
router.delete('/:id', async (req, res) => {
  try {
    await db.query('DELETE FROM Items WHERE id = @id', { id: req.params.id });
    res.json({ message: 'Item deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
