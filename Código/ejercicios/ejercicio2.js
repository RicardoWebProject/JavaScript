/*
    Escribe un programa que pueda calcular el área de 3 figuras geométricas: Triángulo, Rectángulo y Círculo.
    En primer lugar, pregunta de qué figura se quiere calcular el área, después solicita los datos que se necesiten para calcularlo.
        - Triángulo = (base*altura)/2
        - Rectángulo = base * altura
        - Círculo = pi * r^2
*/

let figura_geometrica = prompt('Hola! Introduce alguna de las siguientes figuras de la que desees conocer el área: Triángulo, Rectángulo o Círculo.');

let base;
let altura;
let radio;
let area;

switch (figura_geometrica) {
    case 'Triángulo':
    case 'Triangulo':
    case 'triángulo':
    case 'triangulo':
        base = prompt('Introduce la base del triángulo:');
        altura = prompt('Ahora, introduce la altura:');
        area = (base * altura) / 2;
        console.log(`El área del triángulo es ${Math.round(area * 100) / 100}.`);
        break;

    case 'Rectángulo':
    case 'Rectangulo':
    case 'rectángulo':
    case 'rectangulo':
        base = prompt('Introduce la base del rectángulo:');
        altura = prompt('Ahora, introduce la altura:');
        area = (base * altura)
        console.log(`El área del rectángulo es ${Math.round(area * 100) / 100}.`);
        break;

    case 'Círculo':
    case 'Circulo':
    case 'círculo':
    case 'circulo':
        radio = prompt('Introduce el radio del círculo:');
        area = (Math.PI * (Math.pow(radio, 2)));
        console.log(`El área del círculo es ${Math.round(area * 100) / 100}`); //Para redondear a 2 decimales
        break;

    default:
        alert('Por favor, recarga la página e introduce bien el nombre de la figura.');
        break;
}