import { takeEvery, put, call } from 'redux-saga/effects'

import { imageAPI } from '../../utils/axiosAPI/api'
import { REQUEST_IMAGES } from '../types'
import { fetchImagesSuccess, toggleIsLoading } from '../actions'

function* fetchImages() {
  yield put(toggleIsLoading({ isLoading: true }))

  const image = yield call(imageAPI.getDailyImage)

  yield put(fetchImagesSuccess({ payload: image }))
}

export default function* watchFetchingData() {
  yield takeEvery(REQUEST_IMAGES, fetchImages)
}
