"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    constructor(a, b, c, d, e, f, g) {
        this.calle = a;
        this.numero = b;
        this.piso = c;
        this.letra = d;
        this.cp = e;
        this.poblacion = f;
        this.provincia = g;
    }
    getStreet() {
        return this.calle;
    }
    setStreet(value) {
        this.calle = value;
    }
    getNumber() {
        return this.numero;
    }
    setNumber(value) {
        this.numero = value;
    }
    getFloor() {
        return this.piso;
    }
    setFloor(value) {
        this.piso = value;
    }
    getLetter() {
        return this.letra;
    }
    setLetter(value) {
        this.letra = value;
    }
    getCP() {
        return this.cp;
    }
    setCP(value) {
        this.cp = value;
    }
    getCity() {
        return this.poblacion;
    }
    setCity(value) {
        this.poblacion = value;
    }
    getProvince() {
        return this.provincia;
    }
    setProvince(value) {
        this.provincia = value;
    }
}
exports.Direccion = Direccion;
//# sourceMappingURL=Direcci%C3%B3n.js.map