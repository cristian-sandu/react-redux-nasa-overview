import axios from 'axios'

import { API_KEY, APP_URL } from 'common/constants'

const { BASE, GALLERY } = APP_URL

export const imageAPI = {
  getDailyImage() {
    return axios
      .get(`${BASE}planetary/apod?${API_KEY}`)
      .then(response => response.data.url)
  },

  getGallery() {
    return axios.get(`${GALLERY}/asset/`).then(response => response.data)
  },
}

export default null
