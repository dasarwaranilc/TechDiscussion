const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
// Use users router
app.use('/api/users', usersRouter);

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});