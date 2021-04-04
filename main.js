"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Direcci_n_1 = require("./Direcci\u00F3n");
const Persona_1 = require("./Persona");
const Mail_1 = require("./Mail");
const Tel_fono_1 = require("./Tel\u00E9fono");
// Creación de 3 registros de Persona
let persona1 = new Persona_1.Persona("Lucas", "García Serrano", 34, "54672565G", "3-7-1987", "Azul", "Hombre", [new Direcci_n_1.Direccion("Perales", 6, 2, "B", 28034, "Madrid", "Madrid")], [new Mail_1.Mail("personal", "lucas91@hotmail.com")], [new Tel_fono_1.Telefono("personal", 658297007)], "Alérgico a las nueces");
let persona2 = new Persona_1.Persona("Sonia", "Gallego Pérez", 21, "51723978S", "13-4-1996", "Morado", "Mujer", [new Direcci_n_1.Direccion("Abrantes", 42, 3, "C", 28054, "Madrid", "Madrid")], [new Mail_1.Mail("trabajo", "dentistaGallego@hotmail.com")], [new Tel_fono_1.Telefono('trabajo', 658297007)]);
let persona3 = new Persona_1.Persona("Amancio", "Rodríguez Sabino", 83, "75263789H", "21-06-1933", "Rojo", "Hombre", [new Direcci_n_1.Direccion("Lengua Española", 7, 6, "B", 28028, "Madrid", "Madrid")], [new Mail_1.Mail("personal", "amancio_rodriguez@gmail.com")], [new Tel_fono_1.Telefono('personal', 686301542)]);
let contactos = [persona1, persona2, persona3];
for (const contacto of contactos) {
    console.log(contacto);
}
// Modificación de un registro de Persona
for (const contacto of contactos) {
    let dni = contacto.getDni();
    let direccion = contacto.getDirection();
    let mail = contacto.getMail();
    let telephone = contacto.getTelephone();
    if (dni === "51723978S") {
        direccion.push(new Direcci_n_1.Direccion("Campo de la Paloma", 45, 3, "C", 28036, "Madrid", "Madrid"));
        mail.push(new Mail_1.Mail("personal", "sonii_21@hotmail.com"));
        telephone.push(new Tel_fono_1.Telefono("personal", 672354678));
        console.log(contacto.imprimir());
    }
}
// Consoleamos el array nuevo
for (const contacto of contactos) {
    console.log(contacto);
}
//# sourceMappingURL=main.js.map