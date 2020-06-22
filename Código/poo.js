/* PROGRAMACIÓN ORIENTADA A OBJETOS */

class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.datos = `${this.nombre} ${this.apellido}, edad: ${this.edad} años.`;
    }
    //Un método
    saludar() {
        return console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const ricardo = new Persona('Ricardo', 'Fuentes', 26);
const nancy = new Persona('Nancy', 'Fuentes', 19);
ricardo.saludar(); //Invocamos el método "saludar" de la clase Persona, que ahora es parte del objeto.
nancy.saludar();
console.log(ricardo); //Si quisiéramos ver lo que tiene propiamente el objeto
