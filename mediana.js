

function mitad (array) {
    let mitadArray = 0;
    return mitadArray = parseInt(array.length / 2);
}

function esPar(e) {
    if (e % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function calculoMediana (array) {
    let mediana = 0;
    if (esPar(array.length)) {
        const elemento1 = mitad(array) -1 ;
        const elemento2 = mitad(array) ;
        const promedio = (array[elemento1] + array[elemento2]) / 2 ;
        return mediana = promedio;
    } else {
        return mediana = array[mitad(array)] ;
    }
}    
