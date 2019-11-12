import { FETCH_IMAGES_SUCCESS, IS_LOADING } from '../types'

const initialState = {
  image: {},
  isLoading: false,
}

const imageDailyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        image: action.payload.image,
        isLoading: action.payload.isLoading,
      }

    case IS_LOADING:
      return {
        ...state,
        image: action.payload.image,
        isLoading: action.payload.isLoading,
      }

    default:
      return state
  }
}

export default imageDailyReducer
