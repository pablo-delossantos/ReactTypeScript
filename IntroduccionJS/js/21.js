// Ternarios
const auth = true

const saldo = 1000
const pagar = 1200
const tarjeta = true

// auth
//   ? console.log("Usuario autenticado")
//   : console.log("No autenticado, ir al login")

saldo > pagar || tarjeta
    ? console.log("Puedes pagar")
    : console.log("No puedes pagar")
