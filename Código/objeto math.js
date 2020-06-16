/* El objeto Math se utiliza cuando queremos realizar
    operaciones matemáticas más complejas, más allá de sumar, restar, multiplicar o dividir.
    * Math es un objeto estático. Es decir, debemos invocar su nombre para utilizarlo. En otras palabras, no podemos crear una variable para utilizarlo.
    Como todos los objetos, este objeto utiliza la nomenclatura del punto.
    El objeto Math es un objeto que ya viene incluido y predefinido dentro del lenguaje.
    Tiene varias propiedades:
        Math.E -> Constante de Euler, utilizada en logaritmos y trigonometría
        Math.PI -> El valor matemático para trabajar con circunferencias
    
    MÉTODOS:
        Algunos de los métodos son los siguientes (que claramente, hay muchos más que ellos):
            Math.abs(x) -> Devuelve el valor absoluto de X
            Math.ceil(x) -> Devuelve el entero más pequeño, mayor o igual que un número.
            Math.floor(x) -> Devuelve el entero más grande, menor o igual que un número.
            Math.pow(x,y) -> Devuelve la potencia de X elevado a Y.
            Math.random() -> Genera un número pseudoaleatorio entre 0 y 1.
            Math.round(x) -> Devuelve el valor de un número redondeado al entero más cercano.
            Math.sign(x) -> Devuelve el signo de X, que indica si es positivo, negativo o cero.
            Math.sqrt(x) -> Devuelve la raíz cuadrada de X.
*/
let num = 5.46; //Número cualquiera
let min = 8;
let max = 15;

console.log(`Constante de Euler: ${Math.E}`);
console.log(`Constante PI: ${Math.PI}`);

console.log(Math.abs(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.pow(num, num));
console.log(Math.random());
console.log(Math.round(num));
console.log(Math.sign(num)); //Devuelve: -1 | 0 | 1
console.log(Math.sqrt(num));
//También está la opción de generar un número aleatorio entre un mínimo y un máximo
console.log(Math.random() * (max - min) + min);