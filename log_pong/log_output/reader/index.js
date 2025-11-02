const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const express = require('express');
const app = express();

const readFile = promisify(fs.readFile);

const directory = path.join(__dirname, 'logs');
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/', async (req, res) => {
    const logFilePath = path.join(directory, 'output.log');
    const pingpongFilePath = path.join(directory, 'pongs');

    try {
        const [logFileData, pingpongFileData] = await Promise.all([
            readFile(logFilePath, 'utf8'),
            readFile(pingpongFilePath, 'utf8')
        ]);

        const combinedResponse = `${logFileData}\nPing / Pongs: ${pingpongFileData}`;

        res.type('text/plain');
        res.send(combinedResponse);

    } catch (err) {
        console.error("Error reading files:", err);
        return res.status(500).send('Failed to read log files.');
    }
});
