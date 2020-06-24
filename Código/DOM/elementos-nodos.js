/* Obtener o acceder a los elementos / nodos del DOM. 
        Como dato extra:
                    * En JavaScript se trabajan los elementos a través de su ID.
                    * En CSS se trabaja a través de las clases.
*/

//document.getElementById('id') -> Accede a un elemento a través de su ID.
/* -> Los elementos siempre se guardan en una constante, porque el elemento no cambiará.*/
const titulo = document.getElementById('title');
//El contenido en texto de lo que se obtiene, se puede modificar a través de la propiedad textContent
//textContent es una propiedad que nos permite leer o editar.
//Si sólo lo invocamos, lee el contenido actual. Si lo igualamos a algo, reescribiremos el contenido.
titulo.textContent = 'DOM - Accediendo a los nodos';

console.log(titulo);
console.log(titulo.textContent);

//document | element .querySelector('selectorCSS') -> Accede al primer elemento que coincida con el selector CSS
const parrafo = document.querySelector('.paragraph'); //Debemos pasar un selector CSS no el nombre de la clase
/* querySelectro no tiene por qué descender de un documento. Podría descender de un elemento. */
const subparrafo = parrafo.querySelector('span'); //Aquí no se incluye el punto ya que se está utilizando un selector de elemento
console.log(parrafo);
console.log(subparrafo.textContent);

//document.querySelectorAll('selectorCSS') -> Accede al todos los elementos que coincida con el selector CSS, y devuelve un nodeList
const parrafos = document.querySelectorAll('.paragraph');
parrafos[0].style.color = 'red'; //Esta es una forma de cambiar in-line los estilos de los elementos con CSS
//No es recomendado, pero para efectos de demostrar que querySelectorAll no devuelve un array, se puede emplear.
//parrafos.map(p => p.style.color = 'blue') // utilizar esto devuelve un error, ya que el método .map en este caso, pues un NodeList no es un array.

/* ¿Cómo podemos utilizar un .map cuando estamos utilizando el querySelectorAll */
//A través de dos formas:
/* Utilizando el Spread Operator para convertirlo en un array*/
const parrafosSpread = [...document.querySelectorAll('.paragraph')]; //El único inconveniente del Spread Operator en este caso es la poca compatibilidad con los navegadores
parrafosSpread.map(p => p.style.color = 'blue');
//
/* Utilizando Array.from */
const parrafosArray = Array.from(document.querySelectorAll('.paragraph'));
parrafosArray.map(p => p.style.color = 'brown');


console.log(parrafos);