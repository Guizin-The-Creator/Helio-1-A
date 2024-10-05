// control/ControlHora.js
const Hora = require('./../model/Hora');

module.exports = class ControlHora {
    controle_get_converter(request, response) {
        // Recupera a quantidade de horas passada pela URI
        const horas = request.params.horas; 
        const hora = new Hora();
        hora.horas = horas; // Define as horas na instância

        // Usa o método converterParaMinutos
        const minutos = hora.converterParaMinutos(); 

        const objResposta = {
            minutos: minutos,
        };
        
        response.status(200).send(objResposta);
    }
};
