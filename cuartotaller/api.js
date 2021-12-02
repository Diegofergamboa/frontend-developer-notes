const salariosCol = colombia.map(
    function (person) {
        return person.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (a, b) {
        return salaryA - salaryB;
    }
);

function esPar(number) {
    return (number % 2 === 0);
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica(personitaMitad1, personitaMitad2);
        return mediana;

    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}


function calcularMediaAritmetica (array) {
    const sumaLista = array.reduce (
        function (valorAcumulado = 0, nuevoElemento ) {
            return valorAcumulado + nuevoElemento ;
        }
    )

    const promedioArray= sumaLista / array.length ;
    return promedioArray;
}

console.log(
    medianaSalarios(salariosColSorted)
)