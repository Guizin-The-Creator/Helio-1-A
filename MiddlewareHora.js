// middleware/MiddlewareHora.js
module.exports = class MiddlewareHora {
    validar_horas(request, response, next) {
        const horas = request.params.horas;
        if (isNaN(horas)) {
            const objResposta = {
                status: false,
                msg: "As horas devem ser um número!",
            };
            response.status(400).send(objResposta);
        } else {
            next(); // Chama o próximo middleware ou rota
        }
    }
};
