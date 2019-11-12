import { takeEvery, put, call } from 'redux-saga/effects'

import { imageAPI } from '../../utils/axiosAPI/api'
import { FETCH_IMAGES_SUCCESS, IS_LOADING, REQUEST_IMAGES } from '../types'

function* fetchImages() {
  yield put({
    type: IS_LOADING,
    payload: {
      isLoading: true,
    },
  })

  const image = yield call(imageAPI.getDailyImage)

  yield put({
    type: FETCH_IMAGES_SUCCESS,
    payload: {
      image,
      isLoading: false,
    },
  })
}

export default function* watchFetchingData() {
  yield takeEvery(REQUEST_IMAGES, fetchImages)
}
