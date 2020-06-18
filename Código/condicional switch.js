/*
    Estructura Switch:
    Se utiliza para elegir un camino de varios preestablecidos.
    Tenemos 2 tipos principales:
        - Sintaxis Simple: Un código distinto por caso
            switch (evaluación){
                case n1:
                    código;
                    break;
                case n2:
                    código;
                    break;
                default:
                    código;
            }
        
        - Sintaxis Múltiple: El mismo código en varios casos.
            switch (evaluación){
                case n1:
                case n2:
                case n3:
                    código;
                    break;
                default:
                    código;
            }
*/
let num = 4;

switch (num) {
    case 1:
        console.log('El número tiene el valor 1.');
        break;

    case 2:
        console.log('El valor del número es 2.');
        break;

    default:
        console.log('El número no es 1 ni 2.');
}

switch (num) {
    case 1:
    case 3:
    case 5:
        console.log('El número es impar.');
        break;
    case 2:
    case 4:
    case 6:
        console.log('El número es par.');
        break;
}

/* Sintaxis Múltiple Encadenada */
//Se escriben distintos casos en función de si entra o no a determinadas situaciones.