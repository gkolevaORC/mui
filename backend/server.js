const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 8081;

// Enable CORS for all routes
app.use(cors());


const config = {
    user: 'gab',
    password: 'obi4amZayo99',
    server: 'localhost',
    database: 'OdiData',
    port: 1433,
    synchronize: true,
    trustServerCertificate: true,
};

// app.get('/', (req, res) => {
//     return res.json("From Backend");
// });

// app.get('/locationdatapoints', async (req, res) => {
//     try {
//         let pool = await sql.connect(config);
//         let result = await pool.request().query('SELECT * FROM LocationDataPointsDataHistory');
//         res.json(result.recordset);
//     } catch (error) {
//         console.error('Error executing SQL query:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

const _dirname = path.dirname("")
const buildPath = path.join(__dirname, '../build'); 


app.use(express.static(buildPath))

app.get("/*", async function(req, res){
    try {
        let pool = await sql.connect(config);
        let result = await pool.request().query('SELECT * FROM LocationDataPointsDataHistory');
        res.json(result.recordset);
    } catch (error) {
        console.error('Error executing SQL query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    res.sendFile(
        path.join(__dirname, "../build/index.html"),
      );

})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
