import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://images-api.nasa.gov/',
  method: 'GET',
  withCredentials: true,
  origin: 'http://localhost:3000',

  headers: {
    'X-Custom-Header': 'foobar',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization',
    'API-KEY': '85s01FagZqMWrIPC4liDKVoAcDQNmybGu9hbh3rm',
  },
})

export default null
