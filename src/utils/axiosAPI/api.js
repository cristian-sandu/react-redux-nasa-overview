import axios from 'axios'

import { API_KEY, BASE_URL, GALLERY_URL } from './constants'

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
