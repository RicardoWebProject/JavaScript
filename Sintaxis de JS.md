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
* Las variables se puede:
    * Declarar
    * Inicializar
    * Modificación


* Una **constante** es un espacio que reservamos en memoria para almacenar un dato que **_no cambiará_** durante la ejecución de nuestro programa.
    * La palabra reservada para declarar constantes es **_const_**.
    * Esto es algo que generalmente no existía en ES5, mas llegó a aplicarse mucho más en ES6.

### Scope o Ámbito de una variable/constante
* El scope o ámbito es la zona donde existe nuestra variable/constante.
* Cuando declaramos una variable y después la queremos utilizar; dependiendo de dónde la hayamos declarado, la podríamos usar o no.