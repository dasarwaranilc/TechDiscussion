const sql = require('mssql');
const { pool } = require('./config/db');

// Helper to execute a query with parameters
async function executeQuery(query, params = []) {
    try {
        const request = pool.request();
        params.forEach(param => {
            request.input(param.name, param.type, param.value);
        });
        const result = await request.query(query);
        return result.recordset;
    } catch (err) {
        throw err;
    }
}

// CRUD operations
const context = {
    get: async (query, params = []) => executeQuery(query, params),
    post: async (query, params = []) => executeQuery(query, params),
    put: async (query, params = []) => executeQuery(query, params),
    delete: async (query, params = []) => executeQuery(query, params),
};

module.exports = { context, sql };