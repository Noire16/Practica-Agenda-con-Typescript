"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(a, b, c, d, e, f, g, h, i, j, k) {
        this.direccion = [];
        this.emails = [];
        this.telefonos = [];
        this.nombre = a;
        this.apellidos = b;
        this.edad = c;
        this.dni = d;
        this.cumpleanos = e;
        this.colorFavorito = f;
        this.sexo = g;
        this.direccion = h;
        this.emails = i;
        this.telefonos = j;
        this.notas = k;
    }
    getName() {
        return this.nombre;
    }
    setName(value) {
        this.nombre = value;
    }
    getSurname() {
        return this.apellidos;
    }
    setSurname(value) {
        this.apellidos = value;
    }
    getAge() {
        return this.edad;
    }
    setAge(value) {
        this.edad = value;
    }
    getDni() {
        return this.dni;
    }
    setDni(value) {
        this.dni = value;
    }
    getBirthday() {
        return this.cumpleanos;
    }
    setBirthday(value) {
        this.cumpleanos = value;
    }
    getFavoriteColor() {
        return this.colorFavorito;
    }
    setFavoriteColor(value) {
        this.colorFavorito = value;
    }
    getGender() {
        return this.sexo;
    }
    setGender(value) {
        this.sexo = value;
    }
    getDirection() {
        return this.direccion;
    }
    setDirection(value) {
        this.direccion = value;
    }
    getMail() {
        return this.emails;
    }
    setMail(value) {
        this.emails = value;
    }
    getTelephone() {
        return this.telefonos;
    }
    setTelephone(value) {
        this.telefonos = value;
    }
    imprimir() {
        return JSON.stringify(this);
    }
}
exports.Persona = Persona;
//# sourceMappingURL=Persona.js.map