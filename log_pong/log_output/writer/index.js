const fs = require('fs');
const path = require('path');

const randomString = Math.random().toString(36).substring(2);
const directory = path.join(__dirname,'logs');

if (!fs.existsSync(directory)) {
    console.log(`Creating directory: ${directory}`);
    fs.mkdirSync(directory, { recursive: true });
}

const writeString = () => {
    const filePath = path.join(directory, 'output.log');
    const line = `${new Date().toISOString()} ${randomString}\n`;
    fs.writeFile(filePath, line, err => { if (err) console.error('Failed to write log:', err); });
    setTimeout(writeString, 5000);
};

writeString();
