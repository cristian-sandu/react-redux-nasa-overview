import { put, call, select, takeEvery } from 'redux-saga/effects'

import { imageAPI } from 'utils/axiosAPI/api'

import { fetchImagesGallerySuccess, toggleIsLoading } from '../actions'
import { REQUEST_IMAGES_GALLERY } from '../types'
import { getImagesGalleryPage } from '../selectors'

function* fetchImagesGallery() {
  yield put(toggleIsLoading(true))

  const searchDetails = yield select(getImagesGalleryPage)
  const { searchText, pageIndex, yearStart, yearEnd } = searchDetails

  const { items: imagesItems, metadata: totalItems } = yield call(
    imageAPI.getGallerySearchDef,
    searchText,
    pageIndex,
    yearStart,
    yearEnd,
  )
  yield put(fetchImagesGallerySuccess(imagesItems, totalItems))

  yield put(toggleIsLoading(false))
}

export default function* watchFetchingGallerySaga() {
  yield takeEvery(REQUEST_IMAGES_GALLERY, fetchImagesGallery)
}
