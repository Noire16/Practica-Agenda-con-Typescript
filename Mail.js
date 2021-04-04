"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
class Mail {
    constructor(a, b) {
        this.tipo = a;
        this.direccion = b;
    }
    getTipoEmail() {
        return this.tipo;
    }
    setTipoEmail(value) {
        this.tipo = value;
    }
    getDireccionEmail() {
        return this.direccion;
    }
    setDireccionEmail(value) {
        this.direccion = value;
    }
}
exports.Mail = Mail;
//# sourceMappingURL=Mail.js.map