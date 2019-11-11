import { FETCH_IMAGES_SUCCESS, REQUEST_IMAGES } from '../types'

export const fetchImagesSuccess = () => ({
  type: FETCH_IMAGES_SUCCESS,
})

export const requestImages = () => ({
  type: REQUEST_IMAGES,
})
