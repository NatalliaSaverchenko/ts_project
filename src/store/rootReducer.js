import { combineReducers } from 'redux'
import { PokemonsPageReducer } from '../pages/Pokemons/reducers'
import { todoListReducer } from '../pages/TodoList/reducers'
import { pokemonDetailsReducer } from '../pages/PokemonDetails/reducers'

export const rootReducer = combineReducers({
  todoListPage: todoListReducer,
  pokemonsPage: PokemonsPageReducer,
  pokemonDetails: pokemonDetailsReducer,
})
