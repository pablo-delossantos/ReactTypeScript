// ObjetoS - Destructiring de dos o mas objetos
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: false,
}

const cliente = {
    nombre: "Juan",
    premium: true,
}

// const carrito =  {
//   cantidad: 1,
//   ...producto // Agrega el objeto: spread operator
// }

const nuevoObjeto = {
    ...producto,
    ...cliente,
}

console.log(nuevoObjeto)

const nuevoObjeto2 = Object.assign(producto, cliente)
console.log(nuevoObjeto2)
