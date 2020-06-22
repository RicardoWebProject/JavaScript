//let nombre = prompt('Hola! Ingresa tu nombre:');
let num1 = parseInt(prompt('Por favor, ingresa un número:'));
let num2 = parseInt(prompt('Por favor, ingresa otro número:'));

function saludar() {
    console.log('Hola!');
} //Esto es lo que realiza la función

const saludar2 = (usuario) => {
    console.log(`Hola de nuevo, ${usuario}`);
} //Si una Arrow Function solamente tiene un parámetro, sus paréntesis se pueden omitir.

//saludar(); //De esta manera la invocamos y hacemos que trabaje.
//saludar2(nombre); //No pueden existir funciones con el mismo nombre.

const suma = (a, b) => {
    let suma = a+b;
    let resultado = console.log(`La suma de ${a} y ${b} es igual a ${suma}`);
    return resultado;
}

suma(num1, num2);

/* Las funciones pueden ser almacenadas en variables: */
// let result = suma(num1, num2);
// console.log(result);

