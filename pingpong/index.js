const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

let counter = 0;
app.get('/', async (req, res) => {
    res.send(`pong ${counter++}`);
});