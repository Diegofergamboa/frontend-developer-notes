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

// Validación con el el array includes.

function btnDiscount() {
    if (!cupones.code.includes('ASDF01', 'ASDF02', 'ASDF03', 'ASDF04', 'ASDF05')) {
        alert("Cupón no válido");
    } else {
        findvalue();
    }
}

function findvalue() {

    const inputCodigo = document.getElementById('inputCodigo');
    let valueCodigo = inputCodigo.value;

    const found = cupones.find(element === valueCodigo)
    if (found) {
        debugger
        let codigo = found.discount;
        const inputPrecio = document.getElementById('inputPrice');
        let valuePrecio = inputPrecio.value;

        calcularPrecioConDescuento(valuePrecio, codigo)

        function calcularPrecioConDescuento (precio, descuento) {
            const inputPrecio = document.getElementById('inputPrice');
            let valuePrecio = inputPrecio.value;

            const porcentajePrecioConDescuento = 100 - descuento ;
            const precioConDescuento = (valuePrecio * porcentajePrecioConDescuento) / 100 ;
        
        
            const result = document.getElementById('result');
            return result.innerText = "El precio final con descuento es " + precioConDescuento ;
        }
    } else {
        null ;
    }
}