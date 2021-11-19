// Código del cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log('los lados del cuadrado son: ' + (ladoCuadrado * 4));

console.groupEnd();

// Triángulo 

console.group("Triángulos");

const ladoTriangulo1 = 6 ;
const ladoTriangulo2 = 6 ;
const baseTriángulo = 4 ;
const alturaTriángulo = 5 ;

console.log("Los lados de mi triángulo son "+ladoTriangulo1+" y, "+ladoTriangulo2+" la base es: "+baseTriángulo);

const areaTriangulo = ( baseTriángulo * alturaTriángulo ) / 2 ;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriángulo ;
console.log(`El area del triangulo es ${areaTriangulo}`);
console.log(`El perímetro del cuadrado es ${perimetroTriangulo}`);

console.groupEnd();



