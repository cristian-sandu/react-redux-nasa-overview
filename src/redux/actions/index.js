import {
  FETCH_IMAGES_GALLERY_SUCCESS,
  FETCH_IMAGES_SUCCESS,
  IS_LOADING,
  REQUEST_IMAGES,
  REQUEST_IMAGES_GALLERY,
  SET_CURRENT_PAGE,
  SET_CURRENT_YEARS_AFTER,
  SET_CURRENT_YEARS_DATE,
  SET_SEARCH_WORD,
} from 'redux/types'

// Loading bar
export const toggleIsLoading = isLoading => ({
  type: IS_LOADING,
  payload: {
    isLoading,
  },
})

// Daily Image
export const fetchImagesSuccess = imageURL => ({
  type: FETCH_IMAGES_SUCCESS,
  payload: {
    imageURL,
  },
})

export const requestImages = () => ({
  type: REQUEST_IMAGES,
})

// ImageGallery Gallery
export const fetchImagesGallerySuccess = (imagesItems, totalItems) => ({
  type: FETCH_IMAGES_GALLERY_SUCCESS,
  payload: {
    imagesItems,
    totalItems,
  },
})

export const requestImagesGallery = () => ({
  type: REQUEST_IMAGES_GALLERY,
})

// Search
export const setSearchWord = searchText => ({
  type: SET_SEARCH_WORD,
  payload: {
    searchText,
  },
  meta: {
    persist: true,
  },
})

// Pagination
export const setCurrentPage = pageIndex => ({
  type: SET_CURRENT_PAGE,
  payload: {
    pageIndex,
  },
  meta: {
    persist: true,
  },
})

// Slider Years
export const setCurrentYearsDate = yearStart => ({
  type: SET_CURRENT_YEARS_DATE,
  payload: {
    yearStart,
  },
  meta: {
    debounce: {
      time: 500,
    },
    persist: true,
  },
})

export const setCurrentYearsAfter = yearEnd => ({
  type: SET_CURRENT_YEARS_AFTER,
  payload: {
    yearEnd,
  },
  meta: {
    persist: true,
  },
})
