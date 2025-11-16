const axios = require('axios');
const fs = require('fs');
const path = require('path');


const imgDir = path.join(__dirname, 'img');
const imagePath = path.join(imgDir, 'image.jpg');
const imageUrl = 'https://picsum.photos/1200';

const downloadImage = async (url, dest) => {
    const response = await axios({
        method: 'GET',
        url: url,
        responseType: 'stream'
    });
    const writer = fs.createWriteStream(dest);
    response.data.pipe(writer);
    console.log("Image downloaded");
}

const start = async () => {
    if (!fs.existsSync(imagePath)) {
        await downloadImage(imageUrl, imagePath);
    }

    setInterval(() => downloadImage(imageUrl, imagePath), 10 * 60 * 1000);
}

start();