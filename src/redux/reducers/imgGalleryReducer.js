import { EMPTY_STRING, EMPTY_ARRAY } from 'common/constants'

import {
  FETCH_IMAGES_GALLERY_SUCCESS,
  IS_LOADING,
  SET_CURRENT_PAGE,
  SET_CURRENT_YEARS_AFTER,
  SET_CURRENT_YEARS_DATE,
  SET_SEARCH_WORD,
} from '../types'

const initialState = {
  items: EMPTY_ARRAY,
  totalItems: 1,
  isLoading: false,
  searchText: EMPTY_STRING,
  yearStart: 1920,
  yearEnd: 2019,
  pageIndex: 1,
}

const imagesGalleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_GALLERY_SUCCESS:
      return {
        ...state,
        items: action.payload.imagesItems,
        totalItems: action.payload.totalItems,
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
        pageIndex: action.payload.pageIndex,
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
