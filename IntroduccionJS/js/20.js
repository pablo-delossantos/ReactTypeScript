const saldo = 1000
const pagar = 1200
const tarjeta = true

/**
 * Logical Or y Logical And
 * || Or - Al menos una se cumpla
 * && And - Revisa que todas se cumplan
 */

if (saldo > pagar || tarjeta) {
    console.log("Puedes pagar")
} else {
    console.log("No puedes pagar")
}
