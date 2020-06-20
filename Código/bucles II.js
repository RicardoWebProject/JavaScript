/*
    BUCLE FOR:
    Es un bucle determinado, ya que especificamos cuántas vueltas dará durante su ejecución.
    Su sintaxis se compone de 3 partes:
        - Iniciación de la varaible
        - Número de vueltas que dará
        - Incremento o decremento de la variable
        :
        for (let i=0; i<=10; i++){
            código;
        }

        - La variable i aumentará o disminuirá su valor en cada vuelta.
    
    PALABRAS RESERVADAS EN LOS BUCLES:
        break; -> Rompe el bucle y se salta a la siguiente línea
        continue; -> Salta la/las posición que se indique en el ciclo y continúa con la ejecución.
*/
let numeros = [0,1,2,3,4,5]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }
numeros.reverse();

for (let  i=0;  i<numeros.length; i++) {
    console.log(`i vale ${i}, y el valor en esa posición del array es ${numeros[i]}`);
}

/*
    Con ES6, llegaron dos bucles nuevos que ayudan bastante a la sintaxis de For:
        - For of:
            let names = ['Paco', 'José', 'Paula', 'María'];
            for (let name of names){
                código;
            } //Sólo con esto podemos recorrer un array
            //Muestra el contenido del array
        - For in:
            let names = ['Paco', 'José', 'Paula', 'María'];
            for (let name in names){
                código;
            } //Con este bucle tomamos el índice del array, las posiciones
            //Este es más indicado para recorrer objetos
            Esto simplifica el bucle for tradicional sin tener que darle un número de vueltas ni realizar un incremento
*/
let names = ['Paco', 'José', 'Paula', 'María'];

for (const name of names) {
    if (name === 'Paula') {
        continue;
    }
    console.log(name);
} //Esto imprimirá los valores

// for (const name of names) {
//     console.log(name);
// } //Esto imprimirá los valores

for (const name in names) {
    if (names[name] === 'Paula') {
        continue;
    }
    console.log(name);
} //Esto imprimirá las posiciones

// for (const name in names) {
//     console.log(name);
// } //Esto imprimirá las posiciones