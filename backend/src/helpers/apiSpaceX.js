import axios from "axios";

const baseURL = "https://api.spacexdata.com/latest";

const api = axios.create({
  baseURL,
});

export const get = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;
