// Eventos de l DOM - Clicks
const heading = document.querySelector(".heading")
const enlaces = document.querySelectorAll(".navegacion a")

// Callback: espera que ocurra un evento y cuando ocurre se dispara la funcion.
// heading. addEventListener('mouseenter', () => {
//     heading.textContent = "Nuevo heading al dar click"
// })

// heading. addEventListener('mouseleave', () => {
//     heading.textContent = "Saliendo"
// })

enlaces.forEach(enlace => {
    enlace.addEventListener("click", evento => {
        evento.preventDefault() // No ejecutes tu accion por defecto

        evento.target.textContent = "Diste click"
    })
})
