console.log("Peticiones")

// ----------------------- EVENTO POR ID -----------------------
const getbutton = document.getElementById("obtenerPokemon")

// AGREGAR UN EVENTO AL BOTON
//getbutton.addEventListener("click", traerPokemon)


//ID EVENTO ANONIMO FUNCION HECHA AHI
getbutton.addEventListener("click", async () =>{
    console.log("Hola")
    const data = await traerPokemon()
    let article1 = document.getElementById("Pokemon")
    // crea un elemento a nivel de HTML 
    const h3 = document.createElement("h3")
    // se le asigna un texto al elemento 
    h3.innerText = data.name

    // agregar un elemento como hijo
    article1.appendChild(h3)

    // crear elemento img
    const img = document.createElement("img")
    img.src = data.sprites.front_default
    article1.appendChild(img)
} )

// async permite indicarle a JS que espere mientras hacemos la peticion de la API
const traerPokemon = async () => {
   
    const leerinput = document.getElementById("NombrePokemon")
    let NombrePikachu = leerinput.value
    const respuestaPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${NombrePikachu}`)
    
    //await indicar la prioridad de espera a JS para ejecutar la petición
    /* const respuestaPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu") */
    const datosPokemon = await respuestaPokemon.json()
    console.log(datosPokemon)
    return datosPokemon
}









