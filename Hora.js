// model/Hora.js
module.exports = class Hora {
    constructor() {
        this._horas = 0;
    }

    set horas(horas) {
        this._horas = horas;
    }

    get horas() {
        return this._horas;
    }

    converterParaMinutos() {
        return this._horas * 60; // Converte horas para minutos
    }
};
