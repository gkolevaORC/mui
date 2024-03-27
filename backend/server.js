const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 8081;

// Enable CORS for all routes
app.use(cors());

const config = {
    user: process.env.DB_USER || 'remote',
    password: process.env.DB_PASSWORD || 'obi4amYazo99',
    server: process.env.DB_SERVER || '192.168.50.112',
    database: process.env.DB_NAME || 'OdiData',
    port: 1433,
    synchronize: true,
    trustServerCertificate: true,
    options: {
        encrypt: true, // For Windows Azure
        trustedConnection: true
    }
};

// Serve static files from the React app


const buildPath = path.join(__dirname, '../build');
app.use(express.static(buildPath));

// API route for location data points
app.get('/api/locationdatapoints', async (req, res) => {
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT * FROM LocationDataPointsDataHistory');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// All remaining requests return the React app, so it can handle routing.
// This ensures that direct API calls do not receive HTML unexpectedly.
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
