/*
    OBJETOS NATIVOS DEL NAVEGADOR:

    - Objeto Window:
        Es el objeto global. De él descienden todos los objetos.
        Como es un objeto global, no es necesario escribirlo explícitamente.
            alert() => window.alert()
            prompt()
            confirm()
            addEventListener()
            document...
    - Objeto Console:
        Es el objeto que tiene la consola del navegador.
            console.log()
            console.dir()
            console.error()
            console.table()
    - Objeto Location:
        Es el objeto que contiene la barra de direcciones
            location.href
            location.protocol
            location.host
            location.pathname
            location.hash
            location.reload()
    - Objeto History:
        Trabaja con el historial de la pestaña donde estamos navegando.
        Solamente funciona en la sesión actual. No accede al historial completo del navegador.
        Solamente tiene 3 métodos y una propiedad, siendo:
            history.back()
            history.forward()
            history.go(n|-n)
            history.lenght
    - Objeto Date:
        Los métodos son demasiados como para anotarlos aquí.
        La página a consultar puede ser: 
            https://www.w3schools.com/jsref/jsref_obj_date.asp
    
    TIMERS:
    Con los Timers se puede establecer que una función se ejecute no desde su lectura inmediata,
    sino transcurrido un tiempo especificado.
    Para ello tenemos:
        - setTimeout(() => {codigo...}, delayEnMilisegundos) -> Hace que se ejecute la función después del delay.
            Si lo referenciamos mediante una variable/constante, podemos pasarlo con clearTimeout(referencia).
        - setInterval(() => {código...}, delayEnMilisegundos) -> Se ejecuta una función cada delay.
*/
//Window
const boton = document.getElementById('button');

const persona = {
    nombre: 'Ricardo',
    edad: 26,
    email: 'ricardo@gmail.com'
}
//Console
console.dir(boton); //Despliega todo el contenido del objeto, en caso de que console.log no lo haga
console.log(persona);
console.table(persona); //Nos muestra los datos organizados en una tabla

//Location
console.log(location.href); //Devuelve la dirección del servidor y página;
// boton.addEventListener('click', (e) => {
//     location.href = 'https://www.w3schools.com/jsref/jsref_obj_date.asp'
// }) //Y sirve para cambiar el valor de la URL. Puede ser una forma de redirigir páginas en JS
console.log(location.protocol); //Devuelve el protocolo HTTP de la página
console.log(location.host); //Dir IP del host de la página y el puerto
console.log(location.pathname); //El resto de la localización
console.log(location.hash); //Es una forma de pasar parámetros entre páginas
//location.reload(); //recarga la página cuando se necesite

//Date
const d = new Date();
console.log(d);
console.log(d.getDate()); //Retorna el día del mes
console.log(d.getDay()); //Día de la semana
console.log(d.getMonth()); //Mes (empieza de 0 y termina en 11)
console.log(d.getFullYear()); //El año

//Timers
const saludar = () => {
    console.log('Hola!');
}

// boton.addEventListener('click', (e) => {
//     setTimeout(() => saludar(), 1000)
// });

const intervalo = setInterval(() => saludar() , 1000);

boton.addEventListener('click', (e) => {
    clearInterval(intervalo);  //clearTimeout o clearInterval interrumpe la ejecución de un Timer
})