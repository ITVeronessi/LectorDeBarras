function calcularPromedio(codigo) {
    // obtener todas las filas del producto
    const filas = [...document.querySelectorAll("#tablaDatos tbody tr")];

    let totalCosto = 0;
    let totalCantidad = 0;

    filas.forEach(row => {
        const c = row.children[0].innerText;
        if (c === codigo) {
            const cantidad = parseFloat(row.children[getIndex("Cantidad")].innerText) || 0;
            const precio = parseFloat(row.children[getIndex("Costo Unitario")].innerText) || 0;

            totalCantidad += cantidad;
            totalCosto += cantidad * precio;
        }
    });

    const costoPromedio = totalCosto / totalCantidad;

    alert(`Costo promedio del producto (${codigo}): $${costoPromedio.toFixed(2)}`);
}

// Buscar el índice de la columna
function getIndex(nombreColumna) {
    const headers = [...document.querySelectorAll("#tablaDatos thead th")].map(x => x.innerText.trim());
    return headers.indexOf(nombreColumna);
}
