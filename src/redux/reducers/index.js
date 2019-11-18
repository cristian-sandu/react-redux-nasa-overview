import { combineReducers } from 'redux'

import imageDailyReducer from './imgDailyReducer'
import imagesGalleryReducer from './imgGalleryReducer'

const rootReducers = combineReducers({
  imgDailyPage: imageDailyReducer,
  imagesGalleryPage: imagesGalleryReducer,
})

export default rootReducers
