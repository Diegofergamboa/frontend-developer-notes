numbers = [1,2,3,4,5,6,7,8,9,2,3,4,2,1,3,2,4,5,6,7,5,4,3,3,21,1,2,3,4,3,1,2,2,5,6,];


const numbersObject = {} ;

numbers.map(
    function (number) {
        if (numbersObject[number]) {
            numbersObject[number] += 1 ;
        } else {
            numbersObject[number] = 1 ;
        }
    }
);

const numbersArray = Object.entries(numbersObject).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1] ;
    }
);

// console.log(numbersArray);
const moda = numbersArray[numbersArray.length -1];
// ! Conocer por qué debe ir con menos 1 y no con más 1 xD

