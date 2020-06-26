/*
    DOM - Crear e Insertar elementos
*/
/*
    - Crear un elemento: document.createElement(element);
    - Escribir texto en un elemento: element.textContent = 'texto';
    - Escribir HTML en un elemento: element.innerHTML = código HTML;
    - Añadir un elemento al DOM: parent.appendChild(element); 
        Siempre que queramos meter un elemento, este debe ser hijo de alguien
    - Fragmentos de código: document.createDocumentFragment();
        DocumentFragment se creó con la intención de que el navegador no se sobrecarge
        dibujando el árbol del DOM a cada inyección de código HTML.
*/

const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const titulo = document.getElementById('title');
const daysList = document.getElementById('daysList');
const selectDays = document.getElementById('daysSelect');

//Crear un elemento
// // const itemList = document.createElement('li');
// // itemList.textContent = 'Lunes';
// // console.log(itemList);

//Añadiendo el elemento
// // daysList.appendChild(itemList);

//Añadiendo contenido HTML
titulo.innerHTML = 'DOM - <span> Crear e Insertar elementos I </span>';

//Fragmento de Código: Variable o contenedor donde escribiremos todo el HTML que queremos en el documento
//Llenaremos de código el daysList
const fragment = document.createDocumentFragment();
const fragment2 = document.createDocumentFragment();

for (const day of dias) {
    const itemList = document.createElement('li');
    itemList.textContent = day;
    fragment.appendChild(itemList);
}
console.log(fragment);

//Llenaremos de código el selectDays
for (const day of dias) {
    const selectItem = document.createElement('option');
    selectItem.setAttribute('value', day.toLowerCase());
    selectItem.textContent = day;
    fragment2.appendChild(selectItem);
}

daysList.appendChild(fragment);
selectDays.appendChild(fragment2);
