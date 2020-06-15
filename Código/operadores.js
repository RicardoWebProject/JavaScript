let a = 5;
let b = 2;

let usuario = 'Ricardo';

/*Operadores matemáticos*/
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Concatenación
console.log('Hola, mi nombre es ' + usuario);

/*Operadores de Incremento/Descremento*/ 
//Incremento
console.log ('Inicio con valores de a = 5'); //Muestra el valor
console.log ('Valor inicial de a: ' + a); //Muestra el valor
console.log ('Valor de a tras postincremento: ' + a++); //Primero incrementa y después devuelve, por lo que aquí muestra el mismo valor anterior
console.log ('Nuevo valor de a: ' + a); //Ahora ya muestra el nuevo valor.
console.log ('Valor de a tras preincremento: ' + (++a)); //Muestra al mismo tiempo que muestra el valor actual
console.log ('Fin de valores de a'); //Muestra al mismo tiempo que muestra el valor actual

//Decremento
console.log('Inicio con valores de b = 2');
console.log('Valor inicial de b: ' + b);
console.log('Valor de b tras postincremento: ' + b--);
console.log('Nuevo valor de b: ' + b);
console.log('Valor de b tras preincremento: ' + (--b));
console.log('Fin de valores de b');

/*Operadores de Asignación*/
let c = 10;
console.log(c);
console.log(c += 3); 
console.log(c -= 3); 
console.log(c *= 3); 
console.log(c /= 3); 
console.log(c %= 3); 



