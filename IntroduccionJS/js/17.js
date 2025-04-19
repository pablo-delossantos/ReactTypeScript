// Array Methods

const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
const numeros = [10, 20, 30]

// Filter
// const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')
// const resultado = numeros.filter((numero) => numero > 15)

// Includes
// const resultado = tecnologias.includes('CSS')

// Some - Devuelve si al menos uno cumple la condicion
// const resultado = numeros.some((numero) => numero > 15)

// Find - Devuelve el primer elemento que cimple una funcion.
// const resultado = numeros.find((numero) => numero > 20)

// Every - Retorna true o false si todos cumplen la condición
// const resultado = numeros.every((numero) => numero > 5)

// Reduce - Retorna un acumulado del total
const resultado = numeros.reduce((total, numero) => total + numero, 0)

console.log(resultado)
