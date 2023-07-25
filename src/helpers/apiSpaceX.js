const axios = require('axios')

const baseURL = 'https://api.spacexdata.com/'

const api = axios.create({
  baseURL,
})

const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint)
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = { get }
