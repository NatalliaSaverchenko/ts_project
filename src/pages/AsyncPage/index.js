// import { useEffect, useState } from 'react'
// import api from '../../api/config'
import { useFetching } from '../../hooks/useFetching'
import { getPokemons } from './getPokemons'
export const AsyncPage = () => {
  const { response, isLoading, error } = useFetching(getPokemons)
  //   чтобы что-то передать пишем
  // useFetching(async () => getPokemons(1))

  //   async await inside useEffect
  //   useEffect(() => {
  //     ;(async () => {
  //       const { data } = await api.get('/pokemon')
  //       setPokemons(data.results)
  //     })()
  //   }, [])

  //  ordinary useEffect with request
  // useEffect(() => {
  //   setIsLoading(true)
  //   api.get('/pokemon').then((response) => {
  //     setPokemons(response.data.results)
  //     setIsLoading(false)
  //   })
  // }, [])
  return (
    <div>
      <h1>ASYNC</h1>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {response?.results?.map(({ name, url }) => (
              <div key={url}>{name}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
