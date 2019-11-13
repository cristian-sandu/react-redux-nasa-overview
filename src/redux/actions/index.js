import { FETCH_IMAGES_SUCCESS, IS_LOADING, REQUEST_IMAGES } from '../types'

export const fetchImagesSuccess = ({ payload: image }) => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: {
    image,
    isLoading: false,
  },
})

export const toggleIsLoading = () => ({
  type: IS_LOADING,
  payload: {
    isLoading: true,
  },
})

export const requestImages = () => ({
  type: REQUEST_IMAGES,
})
