const express = require('express');
const routes = express.Router();
const path = require('path');

routes.get('/', (req, res) => {
    res.sendFile(path.resolve('../frontend/index.html'))
})

routes.get('/car/*', (req, res) => {
    let id = req.url.substring(5);
    res.cookie('carId', id);
    console.log(id)
    res.sendFile(path.resolve('../frontend/car/oneCar.html'))
    console.log(req.url)
})

module.exports = routes;