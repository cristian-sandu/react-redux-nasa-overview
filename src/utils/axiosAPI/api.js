import axios from 'axios'

const baseURL = 'https://api.nasa.gov/'
const apiKEY = 'api_key=aCNwLvVe8gykdUxPUggWkOt3lB3RzzHoVHTy4ZQZ'

export const imageAPI = {
  getDailyImage() {
    return axios
      .get(`${baseURL}planetary/apod?${apiKEY}`)
      .then(response => response.data)
  },
}

export default null
