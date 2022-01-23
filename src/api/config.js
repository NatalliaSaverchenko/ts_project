import axios from 'axios'

const BASE_URL = 'https://pokeapi.co/api/v2'
const config = {
  baseURL: BASE_URL,
}
const api = axios.create(config)
export default api
