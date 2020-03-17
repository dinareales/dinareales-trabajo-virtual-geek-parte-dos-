function calculatePrice(price) {
    const iva = price*0.21;
    const total = iva + price;
    const result = `Precio sin IVA: ${price}, IVA: ${iva} y Total: ${total}`;
    return result;
}
console.log( calculatePrice(10) );
