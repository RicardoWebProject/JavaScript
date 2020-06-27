/*
    INSERTAR Y ELIMINAR ELEMENTOS II:
        - parent.insertBefore(newElement, referenceElement) -> Inserta un elemento antes del elemento de referencia

        Soporte Total:
            - parent.insertAdjacentElement(position, element)
            - parent.insertaAdjacentHTML(position, HTML)
            - parent.insertaAdjacenText(position, text)
        Posiciones:
            - beforebegin -> Antes de que empiece (hermano anterior)
            - afterbegin -> Después de que empiece (primer hijo)
            - beforeend -> Antes de que acabe (último hijo)
            - afterend -> Después de que acabe (hermano sguiente)
        
            - parent.replaceChild(newChild, oldChild) -> Reemplaza un hijo por otro
    
    Clonar y Eliminar elementos:
        - element.cloneNode(true|false) -> Clona el nodo. Si le pasamos true, clona todo el elemento con los
            hijos. Si le pasamos false, clona solo el elemento sin hijos
        - element.remove() -> Elimina el nodo del DOM
        - element.removeChild(child) -> Elimina el nodo hijo del DOM
*/

const lista = document.getElementById('list');
const newElement = document.createElement('li');
newElement.textContent = 'Soy el nuevo elemento.'

//Instar el nuevo elemento
// // lista.insertBefore(newElement, lista.children[0]);

// lista.children[0].insertAdjacentElement('beforebegin', newElement);
// lista.insertAdjacentElement('afterbegin', newElement);
// lista.insertAdjacentElement('beforeend', newElement);
// lista.children[0].insertAdjacentElement('afterend', newElement);
// // lista.children[1].insertAdjacentHTML('afterend', '<li>Elemento con HTML</li>'); //Incluyendo HTML
// // lista.children[1].insertAdjacentText('afterend', '<li>Elemento con HTML</li>'); //Incluyendo texto

lista.replaceChild(newElement, lista.children[0]);

//Clonar elementos
//lista.after(lista.cloneNode(true));

//Eliminar elementos
//lista.remove();
lista.removeChild(lista.children[0]);