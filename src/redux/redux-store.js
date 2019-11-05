import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import watchFetchingSaga from './saga'
import rootReducers from './reducers'

const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(
  rootReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)
sagaMiddleware.run(watchFetchingSaga)
export default store
