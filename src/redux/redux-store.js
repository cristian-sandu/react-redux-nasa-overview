import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createDebounce from 'redux-debounced'

import watchFetchingSaga from './saga/sagaImageDaily'
import watchFetchingGallerySaga from './saga/sagaImagesGallery'
import rootReducers from './reducers'

const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const debounceMiddleware = createDebounce()
const middleware = [sagaMiddleware, debounceMiddleware]

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)

sagaMiddleware.run(watchFetchingSaga)
sagaMiddleware.run(watchFetchingGallerySaga)

export default store
