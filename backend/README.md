# Node.js API with MSSQL Connectivity

This project is a Node.js REST API using Express and MSSQL. It provides basic CRUD endpoints and connects to a Microsoft SQL Server database.

## Features
- Express-based API routing
- MSSQL connectivity using the `mssql` package
- Basic CRUD endpoints
- Configurable database connection

## Setup Instructions
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure your MSSQL connection in `config/db.js`.
3. Start the server:
   ```bash
   npm start
   ```

## Endpoints
- `GET /items` - List all items
- `GET /items/:id` - Get item by ID
- `POST /items` - Create new item
- `PUT /items/:id` - Update item
- `DELETE /items/:id` - Delete item

## Notes
- Replace placeholder values in the config with your actual database credentials.
- See inline comments for further customization.
