const sql = require('mssql');

const config = {
    user: 'admin',
    password: 'admin',
    server: 'DESKTOP-INSTJ3I',
    database: 'class_data',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const pool = new sql.ConnectionPool(config);

pool.connect()
    .then(() => {
        console.log('Connected to SQL Server');
    })
    .catch(err => {
        console.error('Database connection failed: ', err);
    });

module.exports = {sql, pool};