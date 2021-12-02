
function calcularMediaAritmetica (array) {
    // * Método de for sencillo 
    // let sumaArray = 0
    // for (var i = 0 ; i < array.length ; i ++ ) {
    //     sumaArray = sumaArray + array[i];
    // }
    // const promedio = sumaArray / array.length;
    // console.log(promedio);

    //* Método de .reduce() sencillo 
    const sumaLista = array.reduce (
        function (valorAcumulado = 0, nuevoElemento ) {
            return valorAcumulado + nuevoElemento ;
        }
    )

    const promedioArray= sumaLista / array.length ;
    return promedioArray;
}

array1 = [
    1,
    2,
    3,
    4,
    5,
]

calcularMediaAritmetica(array1);