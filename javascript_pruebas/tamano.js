// const a = 10000;

function contador(a) {
    let cd = 0;
    while (a > 0) {
        a = a / 10 ;
        a = parseInt(a);
        cd = cd + 1 ;
        console.log(`El numero de digitos del numero es ${cd}`);
    }
}
contador(100000);