// Código del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
}



function areaCuadrado(lado) {
    return lado * lado;
}


console.groupEnd();

console.group("Triángulos");


function areaTriangulo (baseTriangulo, alturaTriangulo) {
    return ( baseTriangulo * alturaTriangulo ) / 2 ;
}

function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    let c = 0 ;
    c = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ; 
    return c
}

console.groupEnd();

function diametroCirculo (radio) {
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (`El diametro del circulo es igual a ${diametro * PI}`);
}
//Àrea
// const areaCirculo = (radioCirculo * radioCirculo ) * PI ;
function areaCirculo(radio) {
    return (radio * radio ) * PI ;
}

// Prueba // 

// function suma(a,b) {
//     return a + b ;
// }

// function multiplicacion (c) {
//     const sum = suma(1, 2);
//     return c * sum ;
// }

// Calcular perimetro cuadrado


