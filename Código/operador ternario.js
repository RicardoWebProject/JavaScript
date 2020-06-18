/*
    Operador Ternario:
    Se utilza cuando una condición será true o false, al igual que IF.
    Su ejecución puede tener una o varias sentencias. En este caso, irán separadas por comas y entre paréntesis.
        (condición) ? true : false -> En el caso de que exista una sentencia
        (condición) ?
            (primera sentencia, segunda sentencia...) -> En el caso de que existan varias sentencias para true
            :
            (primera sentencia, segunda sentencia...) -> En el caso de que existan varias sentencias para false
*/
let num = 7;

(num % 2 == 0) ? console.log(`${num} es PAR.`) : console.log(`${num} es IMPAR.`);

/*
    Esto es lo mismo que un if:

    if (num % 2 == 0){
        console.log(`${num} es PAR.`);
    } else {
        console.log(`${num} es IMPAR.`);
    }

*/
//Siempre que se pueda, sería mejor utilizar el operador ternario, puesto que los recursos que hacen falta para ejecutarse son menores.
//Esto depende de la comodidad del programador.

//En el caso de tener varias sentencias:

(num % 2 == 0) ?
    (console.log(`${num} es PAR.`), console.log(`${num} es PAR 2.`), console.log(`${num} es PAR 3.`))
    :
    (console.log(`${num} es IMPAR.`), console.log(`${num} es IMPAR 2.`), console.log(`${num} es IMPAR 3.`))