// Escribir un algoritmo que tome dos numeros y, determine cuál de los dos últimos dígitos es el mayor.


// 1. Tomar el valor de los enteros y colocarlos en una variable.
// 2. Tomar el último dígito de cada una de las variables.
// 3. Comparar los últimos dígitos
// 4. Printear cuál de las dos variables es la mayor yield, si son iguales printear ese result 

// Declaración de variables.

// const num1 = 1567 ;
// const num2 = 14534 ;

// Convierte a positivo.
const convertPositive = (a) => {
    if (a < 0) {
        return a * (-1);
    } else {
        return a ;
    }
}
// Saca el último dígito.
function lastDigit(b) {
    b = b / 10 ;
    b = parseInt(b);
    b = b * 10 ;
    return b ;
}



function algoritmoPrincipal(z, x) {
    z = lastDigit(convertPositive(z));
    x = lastDigit(convertPositive(x));
    if (z > x) {
        return (console.log(`${z} es mayor qué ${x}`));
    } else if (x > z) {
        return (console.log(`${x} es mayor qué ${z}`));
    } else if (x === z) {
        return (console.log(`Los numeros son iguales.`));
    }
}

algoritmoPrincipal(156, 300);
