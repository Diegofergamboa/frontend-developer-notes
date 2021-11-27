
function calcularMediaAritmetica (array) {
    // * Método de for sencillo 
    let sumaArray = 0
    for (var i = 0 ; i < array.length ; i ++ ) {
        sumaArray = sumaArray + array[i];
    }
    const promedio = sumaArray / array.length;
    console.log(promedio);
}

array1 = [
    1,
    2,
    3,
    4,
    5,
]

calcularMediaAritmetica(array1);