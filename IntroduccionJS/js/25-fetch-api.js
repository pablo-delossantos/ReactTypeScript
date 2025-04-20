// Fecht API con Promises
const url = "https://jsonplaceholder.typicode.com/123"

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error("Hubo un error...")
  })
  .then(data => console.log(data))
  .catch(error => console.log(error.message))
