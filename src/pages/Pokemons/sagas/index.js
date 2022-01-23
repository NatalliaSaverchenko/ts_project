import * as actions from '../actions'

import { put, call, takeEvery } from 'redux-saga/effects'
import PokemonService from '../../../services/pokemonService'

function* pokemonsPageWorker(action) {
  try {
    const response = yield call(PokemonService.getPokemons)
    yield put(actions.GET_POKEMONS_SUCCESS(response))
  } catch (error) {
    yield put(actions.GET_POKEMONS_FAIL(error))
  }
}

export function* pokemonsPageWatcher() {
  yield takeEvery(actions.GET_POKEMONS_REQUEST, pokemonsPageWorker)
}
