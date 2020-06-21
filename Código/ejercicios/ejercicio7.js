/*
    Crea 3 arrays.
    El primero tendrá 5 números, el segundo se llamará "pares" y el tercero "impares". Estos dos últimos estarán vacíos.
    Después, multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10.
    Si el resultad es par, guarda ese número en el array de pares; y si es impar, en el array de impares. Muestra por consola:
        - la multiplicación que se produce junto con el formato "2 x 3 = 6".
        - El array de Pares y el array de Impares
*/
const numeros = [1,2,3,4,5];
let pares = [];
let impares = [];
let aleatorio;

console.log(`El array INICIAL: [${numeros}]`);

for (const nums of numeros) {
    aleatorio = Math.round((Math.random() * (10 - 1) + 1));
    let mult = nums * aleatorio;

    (nums % 2 == 0) ?
        pares.push(nums)
        :
        impares.push(nums);

    console.log(`Para el número ${nums}, la mutiplicación es: ${nums} x ${aleatorio} = ${mult}`);
}
console.log(`El array de Pares: [${pares}]`);
console.log(`El array de Impares: [${impares}]`);