let mitadArray;

function mitad (array) {
    return mitadArray = parseInt(array.length / 2);
}

function esPar(e) {
    if (e % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana = 0 ;

function calculoMediana (array) {
    let mediana = this.mediana;
    if (esPar(array.length)) {
        const elemento1 = array[mitadArray -1] ;
        const elemento2 = array[mitadArray] ;
        const promedio = (elemento1 + elemento2 ) / 2 ;
        return mediana = promedio;
    } else {
        return mediana = array[mitadArray] ;
    }
}    
