import { handleActions } from 'redux-actions'
import * as actions from '../actions'

const defaultState = {
  pokemonList: [],
  isLoading: false,
  errors: null,
}

export const PokemonsPageReducer = handleActions(
  {
    [actions.GET_POKEMONS_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [actions.GET_POKEMONS_SUCCESS]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      pokemonList: payload.response.results,
    }),
    [actions.GET_POKEMONS_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
)
