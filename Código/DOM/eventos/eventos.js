/*
    EVENTOS:
    - Eventos de Ratón:
        * click -> Cuando pulsamos el botón izq del ratón
        * dbclick -> Cuando pulsamos dos veces seguidas el botón izq del ratón
        * mouseenter -> Cuando entramos en la zona que tiene el evento
        * mouseleave -> Cuando salimos de la zona que tiene el evento
        * mousedown -> Cuando pulsamos y no soltamos el botón izquierdo del ratón
        * mouseup -> Cuando soltamos el botón izquierdo del ratón
        * mousemove -> Cuando movemos el ratón
    - Eventos del Teclado:
        * keydown -> Cuando pulsamos una tecla
        * keyup -> Cuando soltamos una tecla
        * keypress -> Cuando pulsamos una tecla y no la soltamos
*/
const boton = document.getElementById('button');

//El evento se construye con el elemento
// // boton.addEventListener('click', () => {
// //     console.log('Click');
// // });

boton.addEventListener('dblclick', () => {
    console.log('Doble Click.');
});

const caja = document.getElementById('box');

// // caja.addEventListener('mouseenter', () => {
// //     caja.classList.replace('red', 'green');
// //     console.log('Verde.');
// // });
// // caja.addEventListener('mouseleave', () => {
// //     caja.classList.replace('green', 'red');
// //     console.log('Rojo');
// // });

// // caja.addEventListener('mousedown', () => {
// //     console.log('Has pulsado el cuadro rojo.');
// // });
// // caja.addEventListener('mouseup', () => {
// //     console.log('Soltaste el click del cuadro rojo.');
// // });

// // caja.addEventListener('mousemove', () => {
// //     console.log('Estás moviendo el mouse dentro del a caja roja.');
// // });

const input = document.getElementById('input');

// // input.addEventListener('keydown', () => {
// //     console.log('Pulsaste una tecla.');
// // });

input.addEventListener('keyup', () => {
    console.log('Has soltado una tecla.');
});

input.addEventListener('keypress', () => {
    console.log('Mantienes pulsada una tecla.');
});