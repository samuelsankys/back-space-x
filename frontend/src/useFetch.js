import { useEffect, useState } from 'react'
import axios from 'axios'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => {
        console.log(error)
        return setError(error)
      })
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
