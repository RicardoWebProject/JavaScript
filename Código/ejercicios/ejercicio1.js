/*
    Solicita un nombre y edad, y muestra por consola el mensaje:
    "Hola ___, tienes ___ años y el año que viene tendrás ___ años"

    Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings.
*/
let nombre = prompt('Introduce tu nombre:');
let edad = prompt('Ahora, introduce tu edad:');
let edad_int = parseInt(edad,10); //Para convertir un string a un entero
let nueva_edad = (edad_int+1);

console.log(`Hola, ${nombre}! Tienes ${edad} años, y el próximo año tendrás ${nueva_edad}`);

