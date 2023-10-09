'use strict' // para evitar erro na hora de rodar por ter colocado uma virgula ou outra coisa errado na aplicação

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');

router.post('/', controller.post);

module.exports = router;