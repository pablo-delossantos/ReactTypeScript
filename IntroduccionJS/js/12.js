const tecnologias = [
  'HTML',
  'CSS',
  'JavaScript',
  'React.js',
  'Node.js',
  'Nest.js',
  'TypeScript'
]

// for (let i = 0; i < tecnologias.length; i++) {
//   console.log(tecnologias[i])
// }

// forEach
// tecnologias.forEach(function (tech) {
//   console.log(tech)
// }) // Es igual al for, pero es mas claro

// map: crea un NUEVO ARREGLO en base a las condiciones de la función

const arrayMap = tecnologias.map(function (tech) {
  return tech
})

console.log(arrayMap)

// for ... of

// for (let tech of tecnologias) {
//   console.log(tech)
// }