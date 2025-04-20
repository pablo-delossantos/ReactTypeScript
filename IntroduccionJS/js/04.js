// Objeto
// Es una colección de propiedades. Una propiedad es una asociacion entre una clave y un valor.

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false,
};

// console.log(producto)
// console.table(producto)
// console.log(producto.nombre)

// Destructuring

// const { nombre, disponible, precio } = producto;
// console.log(nombre, precio, disponible)

// Object Literal Enhancement
const autenticado = true;
const usuario = "Juan";

const nuevoObjeto = {
    autenticado,
    usuario,
};

console.log(nuevoObjeto);
