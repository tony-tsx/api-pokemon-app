import Axios from "axios"

const pokemonApi = Axios.create( {
  baseURL: 'https://pokeapi.co/api/v2'
} )

export default pokemonApi