import {
  FETCH_IMAGES_GALLERY_SUCCESS,
  IS_LOADING,
  SET_CURRENT_PAGE,
  SET_CURRENT_YEARS_AFTER,
  SET_CURRENT_YEARS_DATE,
  SET_SEARCH_WORD,
} from '../types'

const initialState = {
  items: [],
  isLoading: false,
  searchText: '',
  yearStart: 1920,
  yearEnd: 2019,
  page: 1,
  totalPage: '',
}

const imagesGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_GALLERY_SUCCESS:
      return {
        ...state,
        items: action.payload.imagesItems,
      }
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }
    case SET_SEARCH_WORD:
      return {
        ...state,
        searchText: action.payload.searchText,
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.payload.page,
      }
    case SET_CURRENT_YEARS_DATE:
      return {
        ...state,
        yearStart: action.payload.yearStart[0],
      }
    case SET_CURRENT_YEARS_AFTER:
      return {
        ...state,
        yearEnd: action.payload.yearEnd[1],
      }

    default:
      return state
  }
}

export default imagesGalleryReducer
