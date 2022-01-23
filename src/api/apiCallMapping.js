import * as pokemonPageActions from '../pages/Pokemons/actions'
import * as pokemonDetailsActions from '../pages/PokemonDetails/actions'
import PokemonService from '../services/pokemonService'

export const apiCallsMapping = (action) => {
  const actionCallMap = {
    [pokemonPageActions.GET_POKEMONS_REQUEST]: PokemonService.getPokemons,
    [pokemonDetailsActions.GET_POKEMON_DETAILS_REQUEST]:
      PokemonService.getPokemonDetails,
  }

  //   если забыли добавить request
  if (!actionCallMap[action.type]) {
    throw new Error('Not Mapped Action')
  }
  return actionCallMap[action.type]
}
