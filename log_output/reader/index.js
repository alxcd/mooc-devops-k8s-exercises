const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();


const directory = path.join(__dirname,'logs');
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    const filePath = path.join(directory, 'output.log');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send('Failed to read log file.');
        }

        res.type('text/plain');
        res.send(data);
    });
});
