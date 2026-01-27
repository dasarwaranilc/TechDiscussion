const sql = require('mssql');

const config = {
  user: 'admin',
  password: 'admin',
  server: '.\\SQLEXPRESS',
  database: 'class_data',
  options: {
    encrypt: true, // Use true if on Azure
    trustServerCertificate: true // Change to false for production
  }
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config:', err));

async function query(queryString, params = {}) {
  const pool = await poolPromise;
  const request = pool.request();
  Object.entries(params).forEach(([key, value]) => {
    request.input(key, value);
  });
  return request.query(queryString);
}

module.exports = { query };
