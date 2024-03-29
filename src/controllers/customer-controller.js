'use strict'

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/customer-repository');
const md5 = require('md5');
//const encript = require('../shared/encript');

const emailService = require('../services/email-service');

exports.post = async(req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
    contract.IsEmail(req.body.email, 'E-mail inválido');
    contract.hasMinLen(req.body.password, 6, 'A senha deve conter pelo menos 6 caracteres');

    // Se os dados forem inválidos
    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password:  md5(req.body.password + global.SALT_KEY)
            //password:  encript(req.body.password)
        });

        emailService.send(req.body.email, 'Bem vindo ao Node Store', global.EMAIL_TMPL.replace('{0}', req.body.name));

        res.status(201).send({
            data: {
                name: req.body.name,
                email: req.body.email,
                password:  md5(req.body.password + global.SALT_KEY)
            },
            message: 'Cliente cadastrado com sucesso'
        });
    } catch (e) {
        res.status(500).send({ 
            message: 'Falha ao processar sua requisição'

        });
    }        
}
