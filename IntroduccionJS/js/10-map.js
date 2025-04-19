const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js']

// const tecnologias2 = tecnologias.filter(function(tech){
//   if(tech !== "HTML") {
//     return tech
//   }
// })

// Map accede a los elementos del arreglo. Recomendado para modificar los elementos de un arreglo.
const tecnologias2 = tecnologias.map(function (tech) {
  if (tech === 'Node.js') {
    return 'Nest.js'
  } else {
    return tech
  }
})

console.log(tecnologias2)
