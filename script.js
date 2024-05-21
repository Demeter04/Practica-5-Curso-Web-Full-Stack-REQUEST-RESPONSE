console.log("Peticiones")

// async permite indicarle a JS que espere mientras hacemos la peticion de la API
const traerPokemon = async () => {
    //await indicar la prioridad de espera a JS para ejecutar la petición
    const respuestaPokemon = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const datosPokemon = await respuestaPokemon.json()
    console.log(datosPokemon)
}

traerPokemon()
