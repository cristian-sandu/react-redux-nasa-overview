import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import createDebounce from 'redux-debounced'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import {
  createWhitelistFilter,
  createBlacklistFilter,
} from 'redux-persist-transform-filter'
import storage from 'redux-persist/lib/storage'

import localStorageMiddleware from 'redux/middlewares/localStorage'

import rootSaga from './saga'
import rootReducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
const debounceMiddleware = createDebounce()
const middleware = [sagaMiddleware, debounceMiddleware, localStorageMiddleware]

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  transforms: [
    createWhitelistFilter('imagesGalleryPage', [
      'searchText',
      'yearStart',
      'yearEnd',
    ]),
    createBlacklistFilter('imgDailyPage', ['image']),
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
