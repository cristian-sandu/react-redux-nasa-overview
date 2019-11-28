import { ITEM_KEY } from 'common/constants'

export default () => next => action => {
  if (action.meta && action.meta.persist) {
    const actualValue = localStorage.getItem(ITEM_KEY)
    localStorage.setItem(
      ITEM_KEY,
      JSON.stringify({ ...JSON.parse(actualValue), ...action.payload }),
    )
  }
  return next(action)
}
