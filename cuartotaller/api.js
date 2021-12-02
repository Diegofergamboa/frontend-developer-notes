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
}
