import { Routes, Route } from 'react-router-dom'
import { ROUTE_NAMES } from './routeNames'
import { LayoutPageContainer } from '../pages/LayoutPage/containers/LayoutPageContainer'
// import { CounterContainer } from '../pages/Counter/containers/CounterContainer'
import { CountersList } from '../pages/Counter/components/CounterList/CounterList'
import { CounterLayoutContainer } from '../pages/CounterExplanation/containers/CounterLayoutContainer'
import { TodoListLayoutContainer } from '../pages/TodoList/containers/TodoListLayoutContainer'
import { AsyncPage } from '../pages/AsyncPage'
import { FormContainer } from '../pages/Forms/containers/FormContainer'
import { PokemonDetailsContainer } from '../pages/PokemonDetails/containers/PokemonDetailsContainer'
import { PokemonsPageContainer } from '../pages/Pokemons/containers/PokemonsPageContainer'

export const RouterView = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTE_NAMES.HOME} element={<div>Home</div>}></Route>
        <Route
          path={ROUTE_NAMES.LAYOUT}
          element={<LayoutPageContainer />}
        ></Route>
        <Route path={ROUTE_NAMES.COUNTER} element={<CountersList />}></Route>
        <Route
          path={ROUTE_NAMES.COUNTEREXPLANATION}
          element={<CounterLayoutContainer />}
        ></Route>
        <Route
          path={ROUTE_NAMES.TODOLIST}
          element={<TodoListLayoutContainer />}
        ></Route>
        <Route path={ROUTE_NAMES.ASYNC} element={<AsyncPage />}></Route>
        <Route path={ROUTE_NAMES.FORM} element={<FormContainer />}></Route>
        <Route
          path={ROUTE_NAMES.POKEMONS}
          element={<PokemonsPageContainer />}
        ></Route>
        <Route
          path={ROUTE_NAMES.POKEMONS_DETAIL}
          element={<PokemonDetailsContainer />}
        ></Route>
      </Routes>
    </>
  )
}
