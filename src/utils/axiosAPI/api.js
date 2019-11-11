import axios from 'axios'

const baseURL = 'https://images-api.nasa.gov/'
// const api_key = '85s01FagZqMWrIPC4liDKVoAcDQNmybGu9hbh3rm'

export const imageAPI = {
  getDailyImage() {
    return axios
      .get(`${baseURL}asset/iss061e028279`)
      .then(response => response.data.collection.items)
  },
}

export default null
