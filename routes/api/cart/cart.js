const express = require('express');

const routes = express.Router();

routes.get('/test', (req, res) => {
    res.json({msg: 'this is form cart file'})
})

module.exports = routes;