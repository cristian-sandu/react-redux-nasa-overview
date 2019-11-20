import { all } from 'redux-saga/effects'

import watchFetchingSaga from './sagaImageDaily'
import watchFetchingGallerySaga from './sagaImagesGallery'

export default function* rootSaga() {
  yield all([watchFetchingSaga(), watchFetchingGallerySaga()])
}
