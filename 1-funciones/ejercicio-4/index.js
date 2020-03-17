function calculateBorderBox(borderBox, width, padding, border) {
    if (borderBox){
        console.log(`El ancho del contenido es: ${width}px`);
    } else {
        console.log(`El ancho del total de la caja es: ${width+padding+border}`);
    }
}
calculateBorderBox(false, 200,15,3);
