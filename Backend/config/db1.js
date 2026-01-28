const sql = require('mssql/msnodesqlv8');

const config = {
  server: "DESKTOP-INSTJ3I",
  database: "class_data",
  options: {
    trustedConnection: true, // Set to true if using Windows Authentication
    trustServerCertificate: true, // Set to true if using self-signed certificates
  },
  // driver: "ODBC Driver 18 for SQL Server", // Uncomment to use specific driver
};

(async () => {
  try {
    await sql.connect(config);
    const result = await sql.query`select TOP 10 * from MyTable`;
    console.dir(result);
  } catch (err) {
    console.error(err);
  }
})();

module.exports = {sql};