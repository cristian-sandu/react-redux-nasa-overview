import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bool, func, string, number, object, arrayOf } from 'prop-types'

import {
  requestImagesGallery,
  setCurrentYearsAfter,
  setCurrentYearsDate,
  setCurrentPage,
  setSearchWord,
} from 'redux/actions'
import {
  getCurrentPageSelector,
  getEndYearSelector,
  getImagesSelector,
  getIsLoadingSelector,
  getSearchTextSelector,
  getStartYearSelector,
  getTotalItemsOnPageSelector,
} from 'redux/selectors/selectors'
import { Preloader, Search, Pagination, SliderYears } from 'ui-kit'

import './ImageGallery.scss'
import ImageGallery from '../../components/ImageGallery/ImageGallery'

const ImagesGalleryScreen = ({
  isLoading,
  images,
  onImagesGallery,
  searchText,
  pageIndex,
  endYear,
  startYear,
  totalItems,
  setCurrentPage,
  setSearchWord,
  setCurrentYearsDate,
  setCurrentYearsAfter,
}) => {
  useEffect(() => {
    onImagesGallery()
  }, [
    onImagesGallery,
    searchText,
    pageIndex,
    startYear,
    endYear,
    setCurrentPage,
    setSearchWord,
    setCurrentYearsDate,
    setCurrentYearsAfter,
  ])

  if (isLoading) return <Preloader />

  return (
    <div className="wrapper">
      <div className="wrapper__search">
        <Search setSearchWord={setSearchWord} />
        <SliderYears
          setCurrentYearsDate={setCurrentYearsDate}
          setCurrentYearsAfter={setCurrentYearsAfter}
          startYear={startYear}
          endYear={endYear}
        />
      </div>
      <ImageGallery sourceImage={images} />
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPage={totalItems}
        pageCurrent={pageIndex}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  isLoading: getIsLoadingSelector,
  searchText: getSearchTextSelector,
  pageIndex: getCurrentPageSelector,
  startYear: getStartYearSelector,
  endYear: getEndYearSelector,
  images: getImagesSelector,
  totalItems: getTotalItemsOnPageSelector,
})

const mapDispatchToProps = {
  onImagesGallery: requestImagesGallery,
  setSearchWord,
  setCurrentPage,
  setCurrentYearsDate,
  setCurrentYearsAfter,
}

ImagesGalleryScreen.propTypes = {
  images: arrayOf(object).isRequired,
  totalItems: number.isRequired,
  searchText: string.isRequired,
  isLoading: bool.isRequired,
  pageIndex: number.isRequired,
  startYear: number.isRequired,
  endYear: number.isRequired,
  onImagesGallery: func.isRequired,
  setSearchWord: func.isRequired,
  setCurrentPage: func.isRequired,
  setCurrentYearsAfter: func.isRequired,
  setCurrentYearsDate: func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesGalleryScreen)
