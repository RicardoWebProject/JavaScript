/*
    BUCLES: 
    Un bucle se utiliza cuando se desea que un bloque de código se repita.
    Existen bucles determinados e indeterminados.
    - Los determinados son los dados por el número específico de veces que se repetirá. 
        Los usamos cuando sabemos el número de vueltas que dará el bucle.
    - Los indeterminados se utilizan cuando no sabemos el número de veces que debe ejecutarse el código.

    La estructura de un bucle siempre es la misma:
        bucle{
            código;
        }
    
    BUCLES INDETERMINADOS:
    - While:
        Es un bucle indeterminado debido a que no sabemos en concreto cuántas veces se repetirá la ejecución.
        Su sintaxis se compone de una única parte: LA CONDICIÓN DE SALIDA. Si esto no se dicta, obtendríamos un bucle infinito.
            while(condición que rompe el bucle){
                código;
            }
    
    - Do While:
        Es casi igual al primer While, con una pequeña peculiaridad.
        La sintax se compone de dos partes: EL CÓDIGO A EJECUTAR PRIMERO, y después LA CONDICIÓN DE SALIDA.
            do{
                código;
            } while (condición para que se siga ejecutando)
    
    La diferente entre ambos es que DO WHILE se ejecutará al menos una vez, se cumpla o no se cumpla la condición.
    Con WHILE, si la condición no se cumple, entonces no se ejecutará ni una sola vez.
*/
let pass = '';
/* Bucle While*/
// while (pass != 'hola') {
//     pass = prompt('Introduzca su contraseña');
// }
// console.log('Fin del bucle.');

/* Do While */
do {
    pass = prompt('Introduzca su contraseña');
} while (pass != 'hola');
console.log('Fin del bucle.');
