const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');

const PORT = process.env.PORT || 3000;

const publicPath = path.join('__dirname','/../public');

var app = express();
app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`server is up on port ${PORT}`)
})

