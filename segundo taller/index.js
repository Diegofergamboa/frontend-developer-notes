// const precioOriginal = 100 ;
// const descuento = 15;

function calcularPrecioConDescuento (precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento ;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100 ;


    return precioConDescuento;
}

function btnDiscount() {
    // Calls
    inputPrice = document.getElementById("inputPrice");
    priceValue = inputPrice.value ;
    inputDiscount = document.getElementById("inputDiscount");
    discountValue = inputDiscount.value ;

    const precioFinal = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("Result");
    resultP.innerText = "El precio con descuento del producto es $" + precioFinal ;

}

