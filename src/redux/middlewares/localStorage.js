const localStorageMiddleware = store => next => action => {
  next(action)
  localStorage.reduxStore = JSON.stringify(store.getState())
}
export default localStorageMiddleware
