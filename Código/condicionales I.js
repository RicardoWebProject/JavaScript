/* Existen condicionales de tres tipos:
    Simples: Solamente comprueban una cosa.
    Compuestos: Comprueban algo y su caso contrario.
    Múltiples: Controlan varios casos

    La sintaxis de un condicional simple, sería:
        if (condición)
        {
            código1;
            código2;
            ...
        }
    
    La sintaxis de una condición compuesta sería:
        if (condición){...}
        else {
            código de ejecución;
        }
*/
let num1 = 1;
let num2 = 2;

//Para una condición simple:
if (num1 > 0){
    console.log(`El número ${num1} es mayor que 0.`);
}

//Para una condición compuesta (en caso contrario a...):
// if (num1 < 0){
//     console.log(`El número ${num1} es menor que 0.`);
// } else {
//     console.log(`El número ${num1} es mayor que 0.`);
// }

//Condicionales múltiples
if (num1 < 0){
    console.log(`El número ${num1} es menor que 0.`);
} else if (num1 > 0) {
    console.log(`El número ${num1} es mayor que 0.`);
} else {
    console.log(`El número es ${num1}`);
}

//Se pueden comprobar varias cosas en una condición. No hay un límite de cosas a comprobar
/* Operadores Lógicos */
// AND && -> Esto Y Esto
// OR || -> Esto O Esto

if (num1 > 0 && num2 > 0) {
    console.log(`El número ${num1} y el número ${num2} son mayores a 0`);
}

//Podemos anidar IFs
if (num1 > 0) {
    if (num2 > 0){
        console.log(`Ambos números (${num1} y ${num2}) son mayores a 0`);
    }
}

//Podemos trabajar con otros tipos de datos:
//Strings
let palabra = 'Hola';

if (palabra.length > 4) {
    console.log(`${palabra} tiene más de 4 letras.`);
} else if (palabra.length < 4){
    console.log(`${palabra} tiene menos de 4 letras.`);
} else {
    console.log(`${palabra} tiene 4 letras.`);
}

//Booleanos
//Para valores booleanos, basta con que ingresemos la variable dentro de la condición
//if (respuesta) -> nos devolvería true o false dependiendo de su valor.
//if (!respuesta) -> nos devolvería lo contrario de su valor.
let respuesta = false;

if (!respuesta){
    console.log('La respuesta es TRUE.');
} else {
    console.log('La respuesta es FALSE.');
}