/*
    OBJETO EVENTO:
        Consiste en darnos información sobre el evento.
        El objeto evento vive siempre y cuando exista un evento.
        En el callback, el evento puede representarse a través de la letra 'e' o 'event' según sea más cómodo.
*/

const formulario = document.getElementById('form');
const input = document.getElementById('input');
const boton = document.getElementById('button');

// // input.addEventListener('keyup', (e) => {
// //     //console.log(event); //Una forma de ver el evento, pero depende del navegador.
// //     console.log(e.target.id);
// // });

// // addEventListener('click', (e) => {
// //     console.log(e);
// // }); //Si se escribe de esta manera, sólo el método, estamos trabajando con window.

// // boton.addEventListener('click', (e) => {
// //     console.log(e); //Solamente ver imprimir el evento nos brinda suficiente información
// //     //Generalmente, el atributo 'target' nos brinda mucha información
// //     //Toda esta información puede ser accesada a través de la nomenclatura del punto
// // });

formulario.addEventListener('submit', (e) => {
    console.log('El formulario se ha enviado.');
    e.preventDefault(); //Para evitar el evento por default (recargar la página).
});

/*
    Delegación de Eventos:
        Si quisiéramos saber en cuál elemento se hace 'click' (por ejemplo),
        la forma más recomendada es ponerle una escucha de eventos a un elemento padre
        y localizar en cuál de los hijos se ha hecho click.
*/
// // const galeria = document.getElementById('gallery'); //Id del elemento padre

// // galeria.addEventListener('click', (e) => {
// //     e.target.classList.add('red'); //Mostramos el contenido de donde hemos hecho click
// // });

/* A LOS EVENTOS LOS PODEMOS ESCUCHAR O LOS PODEMOS FORZAR */
//formulario.submit(); //Se pueden forzar los eventos a manera de métodos.