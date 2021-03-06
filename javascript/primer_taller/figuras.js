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
    debugger
    return ( baseTriangulo * alturaTriangulo ) / 2 ;
}

function perimetroTriangulo (ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
    function parseEntero (c){
        return parseInt(c);
    }
    return (parseEntero(ladoTriangulo1) + parseEntero(ladoTriangulo2) + parseEntero(baseTriangulo)); 
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

    //Output
    let perimetro = perimetroTriangulo(value_primerlado, value_segundolado, value_base);
    return alert(`el perimetro del triangulo es ${perimetro}`);
}

function calcularAreaTriangulo() {
    //Variables
    const input_altura = document.getElementById("altura");
    let value_altura = input_altura.value;

    const input_base = document.getElementById("base");
    let value_base = input_base.value;

    //Output
    let area = areaTriangulo(value_base, value_altura);
    return alert(`el área del triangulo es ${area}`);
}

// Especial reto 

function tipoTriangulo() {
        // Variables del set
        const input_primerlado = document.getElementById("primerlado");
        let value_primerlado = input_primerlado.value;
    
        const input_segundolado = document.getElementById("segundolado");
        let value_segundolado = input_segundolado.value;
    
        const input_base = document.getElementById("base");
        let value_base = input_base.value;

        // Algoritmo
        if ((value_primerlado == value_segundolado) && (value_primerlado || value_base  != value_segundolado)) {
            return alert('Es un triangulo isósceles');
        } else if ((value_primerlado == value_base) && (value_primerlado || value_segundolado  != value_base)) {
            return alert('Es un triangulo isósceles');
        } else if ((value_segundolado == value_base) && (value_primerlado || value_segundolado  != value_primerlado)) {
            return  alert('Es un triangulo isósceles');
        } else {
            return alert('El triángulo no es isósceles');
        }
}


// Código del circulo.

// Funciones principales.
function setValue () {
    inputRadio = document.getElementById("radio");
    const valueRadio = inputRadio.value
    return valueRadio;
}

const PI = Math.PI;

function diametroCirculo (radio) {
    return radio * 2;
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (`El diametro del circulo es igual a ${diametro * PI}`);
}

function areaCirculo(radio) {
    return (radio * radio ) * PI ;
}

// Funciones de Calls en JS del Circulo

function calcularPerimetroCirculo(){
    let value = setValue();
    let perimetro = perimetroCirculo(value);
    return alert(`El perimetro del circulo es de ${perimetro}`);
}

function calcularAreaCirculo(){
    let value = setValue();
    let area = areaCirculo(value);
    return alert(`El área del circulo es de ${area}`);
}

function calcularDiametroCirculo() {
    let value = setValue();
    let diametro = diametroCirculo(value);
    return alert(`El diámetro del circulo es de ${diametro}`);
}

