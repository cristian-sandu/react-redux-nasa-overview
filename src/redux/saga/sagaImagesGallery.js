import { put, call, select, takeEvery } from 'redux-saga/effects'

import { imageAPI } from 'utils/axiosAPI/api'

import { fetchImagesGallerySuccess, toggleIsLoading } from '../actions'
import { REQUEST_IMAGES_GALLERY } from '../types'
import {
  getCurrentPage,
  getEndYear,
  getSearchText,
  getStartYear,
} from '../selectors'

function* fetchImagesGallery() {
  yield put(toggleIsLoading(true))

  const searchText = yield select(getSearchText)
  const page = yield select(getCurrentPage)
  const yearStart = yield select(getStartYear)
  const yearEnd = yield select(getEndYear)

  const imagesItems = yield call(
    imageAPI.getGallerySearchDef,
    searchText,
    page,
    yearStart,
    yearEnd,
  )
  yield put(fetchImagesGallerySuccess(imagesItems))

  yield put(toggleIsLoading(false))
}

export default function* watchFetchingGallerySaga() {
  yield takeEvery(REQUEST_IMAGES_GALLERY, fetchImagesGallery)
}
