import api from '../api/config'

class PokemonService {
  static instance = new PokemonService()
  getPokemons() {
    return api.get('/pokemon')
  }
  getPokemonDetails(pokemonName) {
    return api.get(`/pokemon/${pokemonName}`)
  }
}
export default PokemonService.instance
