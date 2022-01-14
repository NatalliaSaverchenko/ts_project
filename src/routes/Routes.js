import { Routes, Route } from 'react-router-dom'
import { ROUTE_NAMES } from './routeNames'
import { LayoutPageContainer } from '../pages/LayoutPage/containers/LayoutPageContainer'
// import { CounterContainer } from '../pages/Counter/containers/CounterContainer'
import { CountersList } from '../pages/Counter/components/CounterList/CounterList'
import { CounterAdrianExplanationContainer } from '../pages/CounterAdrianExplanation/containers/CounterAdrianExplanationContainer'

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
          element={<CounterAdrianExplanationContainer />}
        ></Route>
      </Routes>
    </>
  )
}
