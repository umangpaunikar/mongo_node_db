const express = require('express');

const routes = express.Router();

routes.get('/test', (req, res) => {
    res.json({msg: 'this is from product file'})
})

module.exports = routes;