import { useState, useEffect } from 'react'
export const useFetching = (asyncCallback) => {
  const [response, setResponse] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    ;(async () => {
      try {
        setIsLoading(true)
        const { data } = await asyncCallback()
        setResponse(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    })()
  }, [asyncCallback])
  return { response, isLoading, error }
}
