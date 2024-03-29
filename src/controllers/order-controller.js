'use strict'

const repository = require('../repositories/order-repository');
const GenerateRandomAlphanumeric = require('../shared/generate-random-alphanumeric');

exports.get = async(req, res, next) => {
    try {  
        var data = await repository.get();
        res.status(200).send(data);
     } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'

        });
     }
}

exports.post = async(req, res, next) => {
    try {
        await repository.create({
            customer: req.body.customer,
            number: GenerateRandomAlphanumeric(6),
            items: req.body.items
        });
        res.status(201).send({
            data: req.body,
            message: 'Pedido cadastrado com sucesso'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }        
}