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

const cupon = 0 ;
function setCupones(codigo) {
    cupones.forEach(element => {
        codigo === element ? true : null ; 
    });
}

function cuponResult() {
    //Variables
    const inputCodigo = document.getElementById("inputCodigo");
    // let cupon = document.getElementById("inputCupon");
    codigo = inputCodigo.value;
    //Condición
    if (setCupones(codigo) == true) {
        descuento = codigo.discount ;
        alert(`Valor del descuento de ${descuento}`);
    } else {
        alert('Cupón no válido');
    }
    //Printeo
    // outputCupon = cupon.innerText = "Descuento de " + descuento ;
}
