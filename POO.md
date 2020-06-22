# PROGRAMACIÓN ORIENTADA A OBJETOS:
La programación orientada a objetos es un paradigma de la programación que actualiza la forma de programar tradicional.
Es una de las múltiples formas de resolver un problema, como la programación estructurada, programación funcional, etc.

Algunos de los conceptos fundamentales de la POO son:
    * Clases
    * Herencias
    * Objetos
    * Métodos
    * Eventos

## PROPIEDADES:
Un OBJETO como tal, es un conjunto de atributos y métodos (cualidades y acciones), que abstraemos de objetos reales.

Por ejemplo: Una persona tiene nombre, apellido y edad; por lo que puede plasmarse en código de programación de forma tal:
    ~~~
    const persona = {
        nombre: 'Juan'
        apellido: 'García'
        edad: 26
    }
    ~~~

Pero en la vida real existen más de un sólo objeto. Es decir, existen varios con distintos atributos y métodos.
Para abarcar esto, en programación se implementan las CLASES.

Las Clases serían un tipo de "_plantilla_" que sirve como molde para crear los objetos.
Con la llegada de ES6, la creación de objetos a través de clases se pudo volver una realidad.

A la creación de objeto se le denomina **_INSTANCIAR_** (un objeto).
* Obligatoriamente, las clases **NECESITAN UNA FUNCIÓN CONSTRUCTORA.**
* Se tiene que llamar -constructor- (_obligatoriamente_) y se ejecuta cada vez que creamos un objeto.
* A este constructor le pasamos parámetros, que serán lo que el objeto tendrá.
    * Para asignar esos valores al objeto, se utiliza la palabra resverada 'this'.
    * 'this' hace referencia al objeto que creamos
    * Al objeto se le pueden asignar propiedades que no están en los parámetros, pero siempre utilizando 'this' para referenciar al objeto.
        ~~~
       this.datos = {`${nombre} ${apellidos}, edad: ${edad} años`}
        ~~~
        ~~~
        class Persona {
            constructor (nombre, apellido, edad){
                this.nombre = nombre; //nombre del objeto = nombre del parámetro
                this.apellido = apellido; //apellido del objeto = apellido del parámetro
                this.edad = edad; //edad del objeto = edad del parámetro
            }
        }
        ~~~
    * Por convención, los nombres de las clases comienzan con **INICIAL MAYÚSCULA**. Esto sirve para diferenciarlo de las funciones.
        
## MÉTODOS:
Los objetos pueden tener funciones asociadas a él, con la única diferencia de que no se llaman funciones, sino MÉTODOS.
Son exactamente lo mismo, pero se llaman de una forma distinta.
    * Si lo hemos creado nosotros, es una función. Si pertenece al objeto, es un método.
    * Es importante que se encuentre dentro de la clase, pero fuera del constructor.
        ~~~
        class Persona {
            constructor (nombre, apellido, edad){
                this.nombre; //nombre del objeto = nombre del parámetro
                this.apellido; //apellido del objeto = apellido del parámetro
                this.edad; //edad del objeto = edad del parámetro
            }

                saludar() {
                    return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
                }
            }
        ~~~

Para crear los objetos utilizando la clase o plantilla, se hace con la palabra reservada 'new' y el nombre de la clase que queremos utilizar.
    ~~~
    const juan = new Persona ('Juan', 'García', 26) //Objeto Juan
    ~~~

Una vez Instanciado el objeto, podremos acceder a sus propiedades y métodos utilizando la nomenclatura del punto, o buscando su propiedad en el objeto.
    ~~~
    juan.nombre;
    juan.apellido;
    juan.edad;
    juan.datos;
    juan.saludar(); //Método
    ~~~