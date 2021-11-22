
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

// Código del cuadrado.

// Funciones principales.

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

// Funciones de calls on events en JS.

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    alert(value);
    const perimetro = perimetroCuadrado(value);
    debugger
    return alert(`El valor del perimetro del cuadrado con lado ${value} es de ${perimetro}`);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    debugger
    const perimetro = areaCuadrado(value);
    debugger
    return alert(`El valor del área del cuadrado con lado ${value} es de ${area}`);
}