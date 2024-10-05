// router/RouterHora.js
const express = require('express');
const ControlHora = require('../control/ControlHora');
const MiddlewareHora = require('../middleware/MiddlewareHora');

module.exports = class RouterHora {
    criarRotasHora() {
        this._router = express.Router();
        this._controleHora = new ControlHora();
        this._middlewareHora = new MiddlewareHora();

        // Trata a rota GET: /horas/:horas
        this._router.get('/:horas',
            this._middlewareHora.validar_horas, // Valida se as horas são um número
            this._controleHora.controle_get_converter // Chama o controlador
        );

        return this._router;
    }
};
