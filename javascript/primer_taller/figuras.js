
// function diametroCirculo (radio) {
//     return radio * 2;
// }

// const PI = Math.PI;

// function perimetroCirculo(radio) {
//     const diametro = diametroCirculo(radio);
//     return (`El diametro del circulo es igual a ${diametro * PI}`);
// }
// //Àrea
// // const areaCirculo = (radioCirculo * radioCirculo ) * PI ;
// function areaCirculo(radio) {
//     return (radio * radio ) * PI ;
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

// Código del triangulo.

// Funciones principales.

function areaTriangulo (baseTriangulo, alturaTriangulo) {
    return ( baseTriangulo * alturaTriangulo ) / 2 ;
}

function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    let c = 0 ;
    c = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo ; 
    return c
}

// Funciones de calls en JS con Triángulo


function calcularPerimetroTriangulo() {
    // Variables del set
    const input_primerlado = document.getElementById("primerlado");
    let value_primerlado = input_primerlado.value;

    const input_segundolado = document.getElementById("segundolado");
    let value_segundolado = input_segundolado.value;

    const input_base = document.getElementById("base");
    let value_base = input_base.value;

    const input_altura = document.getElementById("altura");
    let value_altura = input_altura.value;

    let area = areaTriangulo(input_base, input_altura);
    return alert(`el perimetro del triangulo es ${area}`);
}
