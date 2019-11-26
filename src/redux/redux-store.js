import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createDebounce from 'redux-debounced'
import { persistStore, persistReducer } from 'redux-persist'
import { createBlacklistFilter } from 'redux-persist-transform-filter'
import storage from 'redux-persist/lib/storage'

import rootSaga from './saga'
import rootReducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
const debounceMiddleware = createDebounce()
const middleware = [sagaMiddleware, debounceMiddleware]

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    createBlacklistFilter('imgDailyPage', ['image']),
    createBlacklistFilter('imagesGalleryPage', [
      'items',
      'totalItems',
      'pageIndex',
    ]),
  ],
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
)

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor }
