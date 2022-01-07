const express = require('express');

const routes = express.Router();

routes.get('/test', (req, res) => {
    res.json({msg: 'This is from supplier file'})
})

module.exports = routes;