// Código del cuadrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log('los lados del cuadrado son: ' + (ladoCuadrado * 4));

function perimetroCuadrado(lado) {
    return lado * 4;
}
// perimetroCuadrado(10);


function areaCuadrado(lado) {
    return lado * lado;
}
// areaCuadrado(156)

console.groupEnd();

// Triángulo 

console.group("Triángulos");

// const ladoTriangulo1 = 6 ;
// const ladoTriangulo2 = 6 ;
// const baseTriángulo = 4 ;
// const alturaTriángulo = 5 ;

function areaTriangulo (baseTriangulo, alturaTriangulo) {
    return ( baseTriangulo * alturaTriangulo ) / 2 ;
}

function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    let c = 0 ;
    c = ladoTriangulo1 + ladoTriangulo2 + baseTriángulo ; 
    return c
}

// console.log(`El area del triangulo es ${areaTriangulo}`);
// console.log(`El perímetro del cuadrado es ${perimetroTriangulo}`);

console.groupEnd();

// Código del círculo

console.group("Circulos");

//Radio

const radioCirculo = 4 ;
console.log(`El radio del circulo es ${radioCirculo}`);
//Diametro

const diametroCirculo = radioCirculo * 2;
console.log(`El perímetro del cuadrado es ${diametroCirculo}`);

//PI

const PI = Math.PI;
console.log(`PI es equivalente a ${PI}`);

//Circunferencia

const perimetroCirculo = diametroCirculo * PI ;
console.log(`El perímetro del circulo es ${perimetroCirculo}`);

//Àrea

const areaCirculo = (radioCirculo * radioCirculo ) * PI ;
console.log(`El área del cuadrado es ${areaCirculo}`);


console.groupEnd();

