/*
    Dado un array de letras, solicita un número de DNI y calcula qué letra le corresponde.
    El número no puede ser negativo ni tener más de 8 dígitos.
    La posición de una letra en el array es el resultado del módulo del número introducido entre 23 (puesto que hay 23 posiciones).
    
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
                    'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
*/
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
                'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; // 23 posiciones

let dni = parseInt(prompt('Por favor, ingresa un número entero menor a 99,999,999 (sin las comas).'));
let letra;
let posicion;

console.log(`ARRAY ORIGINAL (23 posiciones): ${letras}`);
if (dni >= 0 && dni <= 99999999) {
    posicion = dni % 23;
    letra = letras[posicion];
    console.log(`La posición de la letra ${letra} en el array es la ${posicion}.`);
} else if (dni > 99999999) {
    alert('El número debe tener menos de 8 dígitos.');
}