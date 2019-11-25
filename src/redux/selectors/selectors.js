import { createSelector } from 'reselect'

import { getDailyPage, getImagesGalleryPage } from 'redux/selectors'
import { ITEMS_PER_PAGES } from 'common/constants'

export const getTotalItemsOnPage = createSelector(
  getImagesGalleryPage,
  imagesGalleryPage => imagesGalleryPage.totalItems,
)

export const getImages = createSelector(
  getImagesGalleryPage,
  imagesGalleryPage => imagesGalleryPage.items,
)

export const getImagesSelector = createSelector(
  getImages,
  items => items.flatMap(({ links }) => links),
)

export const getTotalItemsHitsSelector = createSelector(
  getTotalItemsOnPage,
  items => items.total_hits,
)

export const getTotalItemsOnPageSelector = createSelector(
  getTotalItemsHitsSelector,
  total_hits => total_hits / ITEMS_PER_PAGES,
)

export const getCurrentPageSelector = createSelector(
  getImagesGalleryPage,
  imagesGalleryPage => imagesGalleryPage.pageIndex,
)

export const getStartYearSelector = createSelector(
  getImagesGalleryPage,
  imagesGalleryPage => imagesGalleryPage.yearStart,
)

export const getEndYearSelector = createSelector(
  getImagesGalleryPage,
  imagesGalleryPage => imagesGalleryPage.yearEnd,
)

export const getIsLoadingSelector = createSelector(
  getImagesGalleryPage,
  imagesGalleryPage => imagesGalleryPage.isLoading,
)

export const getSearchTextSelector = createSelector(
  getImagesGalleryPage,
  imagesGalleryPage => imagesGalleryPage.searchText,
)

export const getDailyImageSelector = createSelector(
  getDailyPage,
  imgDailyPage => imgDailyPage.image,
)

export const getDailyImageIsLoadingSelector = createSelector(
  getDailyPage,
  imgDailyPage => imgDailyPage.isLoading,
)
