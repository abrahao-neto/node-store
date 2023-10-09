'use strict' // para evitar erro na hora de rodar por ter colocado uma virgula ou outra coisa errado na aplicação

const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

module.exports = router;
