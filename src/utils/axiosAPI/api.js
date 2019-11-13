import axios from 'axios'

const BASE_URL = 'https://api.nasa.gov/'
const GALLERY_URL = 'https://images-api.nasa.gov'

const API_KEY = 'api_key=aCNwLvVe8gykdUxPUggWkOt3lB3RzzHoVHTy4ZQZ'

export const imageAPI = {
  getDailyImage() {
    return axios
      .get(`${BASE_URL}planetary/apod?${API_KEY}`)
      .then(response => response.data)
  },

  getGallery() {
    return axios.get(`${GALLERY_URL}/asset/`).then(response => response.data)
  },
}

export default null
