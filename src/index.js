// Objetivo:
// Mostrar una lista de productos en consola. Cada producto debe tener un nombre, precio y la función IVA para pertenecer a la interfaz.
// Cada objeto para ser compatible debe tener la propiedad 'nombre' (string), la propiedad 'precio' (number) y el método que devuelve un number.
// Los objetos no es necesario que declaren explícitamente que implementan esta interfaz pero para ser compatibles sí deben cumplir la estructura.
// 2. Objetos compatibles con la interfaz 
var libro = {
    nombre: "Manual de TypeScript Básico",
    precio: 20,
    calcularPrecioConIVA: function () {
        return this.precio * 1.21;
    }
};
// Declaramos un objeto cuyas propiedades y función calcularPrecioConIVA coinciden con Producto.
// Ejemplo de tipado estructural: el objeto es considerado del tipo Producto si su estructura coincide con la interfaz.
var teclado = {
    nombre: "Teclado",
    precio: 50,
    calcularPrecioConIVA: function () {
        return this.precio * 1.21;
    },
    marca: "Logitech" // propiedad adicional no interfiere
};
// Este objeto teclado cumple también con la estructura de Producto y tiene una propiedad adicional.
// La interfaz sólo exige las propiedades mínimas (nombre, precio, función) por lo que no interfiere la propiedad adicional.
// 3. Función que recibe una lista de productos y los muestra
function mostrarProductos(productos) {
    for (var _i = 0, productos_1 = productos; _i < productos_1.length; _i++) {
        var producto = productos_1[_i];
        console.log("".concat(producto.nombre, ": ").concat(producto.calcularPrecioConIVA(), " \u20AC (IVA incluido)"));
    }
}
// Sólo se pasan por consola los objetos compatibles con Producto
// 4. Llamada a la función con objetos compatibles estructuralmente
mostrarProductos([libro, teclado]);
// 5. Objetos incompatibles
var incorrecto = {
    nombre: "Producto sin IVA",
    precio: 15
};
// Declara un objeto que tiene nombre y precio pero no calcularPrecioConIva por lo tanto no cumple con la interfaz Producto.
// TypeScript rechaza objetos que no tengan toda la estructura requerida.
// Descomenta esta línea para ver el error de tipado estructural:
mostrarProductos([incorrecto]);
