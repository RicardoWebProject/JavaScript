# Sintaxis de JavaScript
La sintaxis de JavaScript realmente es muy parecida a la de otros lenguajes de programación.
Para comprender la sintaxis de este lenguaje debemos tener presente lo siguiente:
* **Es Case Sensitive**:
    * Esto quiere decir que las mayúsculas y minúsculas cuentan (y mucho) al momento de crear nombres de variables en el desarrollo.
    * Por ejemplo: **_Numero_** no es lo mismo que **_numero_**.
    * El lenguaje, en el caso anterior, considera que son dos variables completamente distintas.
    * No tener cuidado con estas mayúsculas y minúsculas suele dar lugar a errores.
* Es de **Tipado Débil o Dinámico**:
    * Esto significa que **_las variables son del tipo de dato que almacenen._**
    * En una misma variable se pueden almacenar números, letras, booleanos, etc.
* Las sentencias finalizan con punto y coma (;):
    * Aunque existe un debate sobre si es obligatorio o no, puesto que el lenguaje puede trabajar con o sin la existencia de este, lo recomendable es aplicarlo.
    * Es recomendable a razón de: Al no existir un punto y coma, el intérprete de JS lo coloca automáticamente, pero en ocasiones **puede no acertar** en la ubicación de este.
* Los bloques finalizan con la llave de cierre (}):
    * De forma opcional, se puede añadir un punto y coma después de la llave de cierre (};). No es que haga falta, pero algunos editores de código marcan error con su ausencia.


# Variables y Constantes
* La definición de variable y constante es exactamente la misma en este lenguaje como en el resto de lenguajes de programación.
* Una **variable** es, como tal, un espacio que reservamos en memoria para almacenar un dato que **_podrá cambiar_** durante la ejecución de nuestro programa.
    * La palabra reservada para declarar variables es **_let_**; no se recomienda utilizar **_var_** a partir de ES6 (ECMAScript 6).
* Las variables se pueden:
    * Declarar:
        * Esto significa decirle al programa que esta variable existe.
        * Puede no tener valor, la podemos crear vacía, pero ya le estamos informando al programa que reserve un espacio en memoria para guardar una variable.
        * Se declaran de esta manera:
            ~~~
            let numero;
            ~~~
    * Inicializar:
        * Inicializar una variable es darle un valor.
        * En el caso que ya esté declarada:
            ~~~
            numero = 5;
            ~~~
        * Existe la opción de declarar e iniciar en la misma sentencia:
            ~~~
            let numero = 5;
            ~~~
    * Modificación:
        * Para modificar el valor de una variable existente, basta con asignarle un nuevo valor:
            ~~~
            numero = 3
            ~~~
        * En este ejemplo, si **_numero_** se inicializaba en 5, ahora su valor cambiaría a 3.
        * Esto se puede realizar siempre y cuando estemos dentro del ámbito de la variable **_numero_**. De lo contrario, podríamos toparnos con un error.
* Para tema de las constantes:
    * Las constantes solamente admiten la declaración e inicialización en la misma sentencia:
        ~~~
        const Pi = 3.1416;
        ~~~


* Una **constante** es un espacio que reservamos en memoria para almacenar un dato que **_no cambiará_** durante la ejecución de nuestro programa.
    * La palabra reservada para declarar constantes es **_const_**.
    * Esto es algo que generalmente no existía en ES5, mas llegó a aplicarse mucho más en ES6.

### Scope o Ámbito de una variable/constante
* El scope o ámbito es la zona donde existe nuestra variable/constante.
* Cuando declaramos una variable y después la queremos utilizar; dependiendo de dónde la hayamos declarado, la podríamos usar o no.


## Tipos de Datos en JavaScript
* **_Primitivos_**:
    * Son los que el lenguaje trae por default; es decir, ya creados por él mismo.
    * Los tipos de datos primitivos en JavaScript son:
        1. Números:
            ~~~
            let numero = 5;
            ~~~
        2. Strings (cadenas):
            * En este caso, existen dos formas de trabajar un string: con comilla simple o con comilla doble.
            * Bajo ningún concepto se puede comenzar un string con comilla simple y finalizar con comilla doble, ni viceversa.
            ~~~
            let cadena = "Hola!";
            let cadena = 'Hola!';
            ~~~
            * Siempre que se trabajen strings, deben ir encerrados en comillas. De lo contrario, el lenguaje interpreta que el contenido es una variable.
            ~~~
            let cadena = Hola;
            ~~~
        3. Booleanos:
            * Tipos de datos lógicos que solo admiten dos valores: true o false. Es lo que interpretaríamos como verdadero o falso.
            ~~~
            let respuesta = true;
            let respuesta = false;
            ~~~
        4. Undefined
        5. Null
            * Que no es lo mismo que undefined
        6. Symbol:
            * Es un tipo de variable nueva que llegó en ES6.