const persona = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Tomás']
}

console.log(persona);
console.log(persona.name);

for (const key in persona) {
    console.log(persona[key]); //Aunque se maneje como un array, esto sólo funciona dentro de este bucle for. De lo contrario, se considera un error.
}

for (const son of persona.sons) { //El bucle For Of, funciona mejor con arrays que con objetos.
    console.log(son);
}

console.log(`Hola, ${persona.name}! Tienes ${persona.age} años, y tus hijos son: ${persona.sons.join(', ')}.`);