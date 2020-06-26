/*
    RECORRIDO DEL DOM (DOM Traversing):

    Padre/parent: Nodo del que desciende
        - parentNode -> Devuelve el nodo padre (que puede no ser un elemento)
        - parentElement -> Devuelve el nodo elemento padre
        NOTA:
            Los nodos del tipo Document y DocumentFragment nunca tednrán un elemento padre, 
            por lo que el parentNode siempre devolverá null.
    
    Hijo/child: Nodo que desciende de un padre
        - childNodes -> Devuelve todos los nodos hijos
        - children -> Devuelve todos los nodos elementos hijos
        - firstChild -> Devuelve el primer nodo hijo
        - firstElementChild -> Devuelve el primer nodo elemento hijo
        - lastChild -> Devuelve el último nodo hijo
        - lasElementChild -> Devuelve el último nodo elemento hijo.
        - hasChildNodes() -> Devuelve true si el nodo tiene hijos y false si no tiene.
    
    Hermanos/siblings: Nodos al mismo nivel
        - nextSibling -> Devuelve el siguiente nodo hermano
        - nextElementSibling -> Devuelve el siguiente nodo elemento hermano
        - previousSibling -> Devuelve el nodo hermano previo
        - previousElementSibling -> Devuelve el nodo elemento hermano previo
    
    Cercano:
        - closest(selector) -> Selecciona el nodo más cercano que cumpla con el selector (aún es experimental).
*/
const padre = document.getElementById('parent'); //Padre

//Devuelve el nodo padre (en este caso, devolvería <nav>)
console.log(padre.parentNode);

/* Hijos: Nodos descendientes de un padre */
//Todos los nodos hijos
console.log(padre.childNodes);
//Todos los nodos elementos hijos
console.log(padre.children); //Lo más habitual es utilizar children en lugar de childNodes
//Primer nodo hijo
console.log(padre.firstChild);
//Primer nodo elemento hijo
console.log(padre.firstElementChild);
//Último nodo hijo
console.log(padre.lastChild);
//Último nodo elemento hijo
console.log(padre.lastElementChild);
//¿Tiene hijos?
console.log(padre.hasChildNodes());
console.log(padre.lastElementChild.hasChildNodes()); //¿El último nodo elemento hijo, tiene hijos?
console.log(padre.lastElementChild.children); //¿Cuáles son estos hijos?

/* Hermanos: Nodos al mismo nivel */
//Nodo hermano
console.log(padre.nextSibling); //Un salto de línea al mismo nivel que el padre
//Nodo elemento hermano
console.log(padre.nextElementSibling); //No hay elementos
//Siguiente elemento hermano despúes de este
console.log(padre.parentElement.nextElementSibling);
//Anterior elemento hermano previo a este
console.log(padre.parentElement.previousElementSibling);