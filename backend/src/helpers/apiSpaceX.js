const axios = require('axios')

const baseURL = 'https://api.spacexdata.com/latest'

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

const post = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data)
    return response.data
  } catch (error) {
    throw error
  }
}

module.exports = { get, post }
