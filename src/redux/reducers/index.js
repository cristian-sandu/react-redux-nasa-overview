import { combineReducers } from 'redux'

import imageReducer from './imageReducer'
import imageDailyReducer from './imgDailyReducer'

const rootReducers = combineReducers({
  imgDailyPage: imageDailyReducer,
  imagePage: imageReducer,
})

export default rootReducers
