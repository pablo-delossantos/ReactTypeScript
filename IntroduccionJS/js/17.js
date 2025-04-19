// Array Methods

const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"]
const numeros = [10, 20, 30]

// Filter
// const nuevoArray = tecnologias.filter((tech) => tech !== 'HTML')
const resultado = numeros.filter((numero) => numero > 15)
if (resultado.length > 0) {
  console.log("Si hay elementos")
} else {
  console.log("No hay elementos")
}
// Includes
// const resultado = tecnologias.includes('CSS')

// Some - Devuelve si al menos uno cumple la condicion
// const resultado = numeros.some(numero => numero > 15)

console.log(resultado)
