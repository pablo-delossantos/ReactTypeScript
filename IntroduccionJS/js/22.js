// Optional Chaining (?)
const alumno = {
    nombre: "Juan",
    clase: "Programación 1",
    aprobado: true,
    examenes: {
        examen1: 90,
    },
}

console.log(alumno.examenes?.examen1) // Existe examenes?
console.log("Despues de alumno")

// Nullish coalescing operator (??)
const pagina = 10 ?? 1
console.log(pagina)
