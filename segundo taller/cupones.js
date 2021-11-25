// Array con cupones

const cupones = [
    {
        code : 'ASDF01' ,
        discount : 10
    } ,
    {
        code : 'ASDF02' ,
        discount : 20
    } ,
    {
        code : 'ASDF03' ,
        discount : 30
    } ,
    {
        code : 'ASDF04' ,
        discount : 40
    } ,
    {
        code : 'ASDF05' ,
        discount : 50
    }
]

// const cupon = 0 ;
function setCupones() {
    console.log(`dentro de set cupones`);
    const inputCodigo = document.getElementById("inputCodigo");
    console.log(`dentro de set cupones con ${inputCodigo}`);
    let codigo = inputCodigo.value;
    console.log(`dentro de set cupones con ${codigo}`);
    switch (codigo) {
        case cupones[0].code :
            alert(`El descuento es de ${cupones[0].discount}%`);
            debugger
            break;
        case cupones[1].code :
            alert(`El descuento es de ${cupones[1].discount}%`);
            break;
        case cupones[2].code :
            alert(`El descuento es de ${cupones[2].discount}%`);
            break;
        case cupones[3].code :
            alert(`El descuento es de ${cupones[3].discount}%`);
            break;
        case cupones[4].code :
            alert(`El descuento es de ${cupones[4].discount}%`);
            break;
    } 
}





function cuponResult() {
    //Variables
    const inputCodigo = document.getElementById("inputCodigo");
    codigo = inputCodigo.value;
    //Condición
    setCupones(codigo);
    debugger
    if (setCupones(codigo) == true) {
        alert(`Valor del descuento de ${descuento}`);
    } else {
        alert('Cupón no válido');
    }
}
