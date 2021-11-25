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

let descuento = 0 ;
function setCupones() {
    // Variables.
    const inputCodigo = document.getElementById("inputCodigo");
    let codigo = inputCodigo.value;
    //Algoritmo de set y arranque.
    switch (codigo) {
        case cupones[0].code :
            alert(`El descuento es de ${cupones[0].discount}%`);
            descuento = cupones[0].discount;
            break;
        case cupones[1].code :
            alert(`El descuento es de ${cupones[1].discount}%`);
            descuento = cupones[1].discount;
            break;
        case cupones[2].code :
            alert(`El descuento es de ${cupones[2].discount}%`);
            descuento = cupones[2].discount;
            break;
        case cupones[3].code :
            alert(`El descuento es de ${cupones[3].discount}%`);
            descuento = cupones[3].discount;
            break;
        case cupones[4].code :
            alert(`El descuento es de ${cupones[4].discount}%`);
            descuento = cupones[4].discount;
            break;
    } 
}

function calcularPrecioConDescuento (precio, descuento) {
    // const porcentajePrecioConDescuento = 100 - descuento ;
    // const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100 ;


    // return precioConDescuento;
}

function btnDiscount() {
    // Variables 
    const inputPrice = document.getElementById("inputPrice");
    let valuePrice = inputPrice.value;
    const result = document.getElementById("result");
    let valueResult = result.value;

    //Algoritmo
    const porcentajePrecioConDescuento = 100 - descuento ;


}
