# Eventos
* Un evento es cualquier cosa que sucede en el documento.
* Tenemos muchos tipos de eventos, y no siempre los ejecuta el usuario. Aunque se tiende a creer que un evento es cuaquier acción ejecutada por el usuario
dentro del documento, no siempre es así:
    * La lectura del contenido del documento HTML por parte del navegador.
    * El contenido de la página (imágenes, videos, elementos, etc.) se ha cargado y está listo para usarse.
    * El usuario moviendo el ratón es un evento.
    * El usuario pulsando una tecla se convierte en un evento.
    * Inclusive, el momento en que una ventana se cierra, se puede percibir como un evento para el sitio.
* Hay eventos que se ejecutan por el simple hecho de abrir la página.

Hasta hace algunos años, los eventos se trataban de la forma:
~~~
<p onclick="saludo()"> Soy un párrafo </p>
~~~
* A través del evento 'onClick' se podía enviar una función a ejecutar cuando se realizara un click en dicho elemento.
* Inclusive, la función podía ser desarrollada ahí dentro, y funcionaba.
* A día de hoy ya no se hace y ya no es recomendable hacer. La primera razón (y quizás la más evidente) es que **_estamos mezclando lenguajes_** (JS en HTML).
* **Ya no es recomendable realizarlo de esta manera** por temas de mantenimiento, de compatibilidad y diversos problemas que esta forma de trabajo puede dar.
* Posiblemente, esto pueda verse en algunos frameworks de desarrollo. Por ejemplo, en Angula, se puede ver algo similar con la siguiente sintaxis:
~~~
<p (click)="saludo()"> Soy un párrafo </p>
~~~
* En este caso, es válido, _pero solamente en Angular._ Es una sintaxis particular de este framework.
* Para realizarlo en código puro, trabajando en JavaScript, la forma correcta de manejar estos eventos, sería de la siguiente manera:
~~~
element.addEventListener('evento', callback);
~~~
* Esta sintaxis representa la forma de _escuchar eventos_ a través de un método llamado 'addEventListener', el cuál recibe dos parámetros:
    * 'evento' -> El Evento que queremos escuchar.
    * callback -> Una función anónima que se ejecuta cuando se dispara el evento.

---
Si se quisieran ver todos los eventos existentes en JS, se puede acceder a [MDN web docs](https://developer.mozilla.org/es/docs/Web/Events).