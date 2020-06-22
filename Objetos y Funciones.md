# Objetos
En programación, un objeto es una estructura de datos que representa propiedades, valores y acciones que puede realizar el objeto como tal.

* Todos los objetos tienen propiedades o atributos (características del objeto), y comportamientos (demostrados en funciones) o acciones representados por pares de :
    * **_Claves_** (keys) : **_Valor_** (value)
    * Por ejemplo:
        ~~~
        const computadora = {
            screenSize: 17,
            model: 'MacBook Pro'
        }
        ~~~

Para acceder a las propiedades y acciones del objeto, se utiliza la nomenclatura del punto:
* Por ejemplo:
    ~~~
    const persona = {
        name: 'Juan',
        age: 26,
        sons: ['Laura', 'Diego']
    }

    console.log(persona.name);
    console.log(persona.age);
    console.log(persona.sons[0]);
    console.log(persona.sons[1]);
    ~~~
* Para los casos en los que las cantidades de propiedades son demasiadas para acceder de manera "manual", se pueden utilizar los bucles para leer el objeto.
    * Por ejemplo, para leer e imprimir **las claves** (name, age, sons):
        ~~~
        for (const key in persona) {
            console.log(key);
        }
        ~~~
    * Si quisiéramos imprimir **los valores**:
        ~~~
        for (const key in persona) {
            console.log(person[key]);
        }
        ~~~

# Funciones
Las funciones son fragmentos de código que escribimos para ejecutar una tarea y no tener que escribir el mismo código más de una vez.
Utilizar las funciones ayuda en gran medida a modularizar el código que estamos desarrollando. Esto se traduce en mejor orden y mejor movilidad dentro del código,
lo cuál ayuda a encontrar mejor los errores posibles y mantenerlo óptimo.

Es común, al comienzo del aprendizaje de la programación, ver funciones que ejecutan demasiado código, por lo que **_Una función debe realizar una sola tarea._**
Y si nos encontráramos con más tareas, pues creamos más funciones. No hay un límite para crear funciones.

La sintaxis de una función es bastante sencilla, tal que:
* Ejemplo:
    ~~~
    function nombreFuncion() {
        código;
    }
    ~~~
* En ES6 surgió una sintaxis nueva para las funciones, conocida como **_Arrow Functions_**. Esta sintaxis soluciona varios problemas en comparación a la tradicional:
    ~~~
    const nombreFuncion = () => {
        código;
    }
    ~~~

Una función puede recibir parámetros, y estos parámetros son los que recibirá la función para ejecutarse.
* A veces los necesitamos y otras veces no, tal que:
    ~~~
    function nombreFuncion(parametro1, parametro2) {
        código;
    }

    const nombreFuncion = (parametro1, parametro2) => {
        código;
    }
    ~~~
* Las funciones pueden **devolver valores**. Esto es lo más usual y recomendable:
    ~~~
    function nombreFuncion(parametro1, parametro2) {
        return parametro1 + parametro2;
    }

    const nombreFuncion = (parametro1, parametro2) => parametro1 + parametro2 //En el caso de tener una sóla línea de código

    const nombreFuncion = (parametro1, parametro2) => {
        return parametro1 + parametro2 //En el caso de tener más de una línea de código
    }
    ~~~