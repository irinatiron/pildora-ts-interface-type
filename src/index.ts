// Objetivo:
// Mostrar una lista de productos en consola. Cada producto debe tener un nombre, precio y la función IVA para pertenecer a la interfaz.

// 1. Interfaz que define la estructura de un producto
interface Producto { 
  nombre: string;
  precio: number;
  calcularPrecioConIVA(): number;
}
// Cada objeto para ser compatible debe tener la propiedad 'nombre' (string), la propiedad 'precio' (number) y el método que devuelve un number.
// Los objetos no es necesario que declaren explícitamente que implementan esta interfaz pero para ser compatibles sí deben cumplir la estructura.

// 2. Objetos compatibles con la interfaz 
const libro = {
  nombre: "Manual de TypeScript Básico",
  precio: 20,
  calcularPrecioConIVA() {
    return this.precio * 1.21;
  }
};
// Declaramos un objeto cuyas propiedades y función calcularPrecioConIVA coinciden con Producto.
// Ejemplo de tipado estructural: el objeto es considerado del tipo Producto si su estructura coincide con la interfaz.

const teclado = {
  nombre: "Teclado",
  precio: 50,
  calcularPrecioConIVA() {
    return this.precio * 1.21;
  },
  marca: "Logitech" // propiedad adicional no interfiere
};
// Este objeto teclado cumple también con la estructura de Producto y tiene una propiedad adicional.
// La interfaz sólo exige las propiedades mínimas (nombre, precio, función) por lo que no interfiere la propiedad adicional.

// 3. Función que recibe una lista de productos y los muestra
function mostrarProductos(productos: Producto[]) {
  for (const producto of productos) {
    console.log(`${producto.nombre}: ${producto.calcularPrecioConIVA()} € (IVA incluido)`);
  }
}
// Sólo se pasan por consola los objetos compatibles con Producto

// 4. Llamada a la función con objetos compatibles estructuralmente
mostrarProductos([libro, teclado]);

// 5. Objetos incompatibles
const incorrecto = {
  nombre: "Producto sin IVA",
  precio: 15
};
// Declara un objeto que tiene nombre y precio pero no calcularPrecioConIva por lo tanto no cumple con la interfaz Producto.
// TypeScript rechaza objetos que no tengan toda la estructura requerida.


// Descomenta esta línea para ver el error de tipado estructural:
// mostrarProductos([incorrecto]);

