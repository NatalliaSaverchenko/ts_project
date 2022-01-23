import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ROUTE_NAMES } from '../../../routes/routeNames'
import { GET_POKEMONS_REQUEST } from '../actions'
import { pokemonPageSelector } from '../selectors'

export const PokemonsPageContainer = () => {
  const dispatch = useDispatch()
  const { pokemonList, isLoading, errors } = useSelector(pokemonPageSelector)

  useEffect(() => {
    dispatch(GET_POKEMONS_REQUEST())
  }, [])

  return (
    <>
      {pokemonList.map(({ name }) => (
        <Link key={name} to={`${ROUTE_NAMES.POKEMONS}/${name}`}>
          <div>{name}</div>
        </Link>
      ))}
    </>
  )
}
