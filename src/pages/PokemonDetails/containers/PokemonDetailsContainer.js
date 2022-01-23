import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GET_POKEMON_DETAILS_REQUEST } from '../actions'
import { pokemonDetailsSelector } from '../selectors'
export const PokemonDetailsContainer = () => {
  const dispatch = useDispatch()
  const { pokemonName } = useParams()

  const { info, isLoading } = useSelector(pokemonDetailsSelector)
  useEffect(() => {
    dispatch(GET_POKEMON_DETAILS_REQUEST(pokemonName))
  }, [])
  return <h1>{isLoading ? 'Loading...' : info.name}</h1>
}
