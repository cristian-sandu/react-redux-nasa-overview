import axios from 'axios'

import { API_KEY, APP_URL, SEARCH_URL } from 'common/constants'

import GalleryModel from './models/GalleryModel'

const { BASE, GALLERY } = APP_URL
const { MEDIA_TYPE } = SEARCH_URL

export const imageAPI = {
  getDailyImage() {
    return axios
      .get(`${BASE}/planetary/apod?${API_KEY}`)
      .then(response => response.data.url)
  },

  getGallerySearchDef(searchText, pageIndex, yearStart, yearEnd) {
    return axios
      .get(
        `${GALLERY}/search?q=${searchText}&page=${pageIndex}&media_type=${MEDIA_TYPE}&year_start=${yearStart}&year_end=${yearEnd}`,
      )
      .then(response => GalleryModel(response.data))
  },
}

export default null
