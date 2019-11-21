import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createDebounce from 'redux-debounced'

import rootSaga from './saga'
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

sagaMiddleware.run(rootSaga)

export default store
