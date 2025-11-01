const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

const randomString = Math.random().toString(36).substring(2);
app.get('/', async (req, res) => {
    res.send(`${new Date().toISOString()} ${randomString} ${Math.random().toString(36).substring(2)}`);
});

const printString = () => {
    console.log(new Date().toISOString(),randomString);

    setTimeout(printString, 5000);
};

printString();
