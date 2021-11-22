
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
    //Variables
    const input = document.getElementById("inputCuadrado");
    let input_value = input.value;
    const perimetro = perimetroCuadrado(input_value);
    //Output
    return alert(`El valor del perímetro del cuadrado con lado ${input_value} es de ${perimetro}`);
}

function calcularAreaCuadrado() {
    //Variables
    const input = document.getElementById("inputCuadrado");
    let input_value = input.value;
    const area = areaCuadrado(input_value);
    //Output
    return alert(`El valor del área del cuadrado con lado ${input_value} es de ${area} metros cuadrados`);
}