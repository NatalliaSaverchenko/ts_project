import 'regenerator-runtime/runtime'
import { all } from 'redux-saga/effects'
// import { pokemonsPageWatcher } from '../pages/Pokemons/sagas'
import { watchRequest } from '../api/watchRequest'

function* rootSaga() {
  // yield all([pokemonsPageWatcher()])
  yield all([watchRequest()])
}
export default rootSaga
