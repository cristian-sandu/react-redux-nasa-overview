import { FETCH_IMAGES_SUCCESS, IS_LOADING, REQUEST_IMAGES } from '../types'

export const toggleIsLoading = isLoading => ({
  type: IS_LOADING,
  payload: {
    isLoading,
  },
})

export const fetchImagesSuccess = imageURL => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: {
    imageURL,
  },
})

export const requestImages = () => ({
  type: REQUEST_IMAGES,
})
