const fs = require('fs');
const path = require('path');

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const directory = path.join(__dirname,'logs');
const filePath = path.join(directory, 'pongs');

if (!fs.existsSync(directory)) {
    console.log(`Creating directory: ${directory}`);
    fs.mkdirSync(directory, { recursive: true });
}

// Function to read the initial counter value from the file
// Copilot
const initializeCounter = () => {
    try {
        // Use readFileSync for simplicity on startup
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            const value = parseInt(data, 10);
            // Check if the file content is a valid number
            return !isNaN(value) ? value : 0;
        }
    } catch (err) {
        console.error('Failed to read initial counter, starting at 0.', err);
    }
    // If file doesn't exist or read fails, start at 0
    return 0;
};

// Initialize the counter from the file
let counter = initializeCounter();
console.log(`Initialized counter to: ${counter}`);

const writePong = (count) => {
    fs.writeFile(filePath, `${count}`, err => { if (err) console.error('Failed to write log:', err); });
};

app.get('/', (req, res) => {
    writePong(counter);
    res.send(`pong ${counter++}`);
});