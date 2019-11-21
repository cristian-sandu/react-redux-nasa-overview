import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bool, func, string, number, object, arrayOf, exact } from 'prop-types'

import {
  requestImagesGallery,
  setCurrentYearsAfter,
  setCurrentYearsDate,
  setCurrentPage,
  setSearchWord,
} from 'redux/actions'
import { getEndYear, getStartYear } from 'redux/selectors'
import { Preloader, Search, Pagination, SliderYears } from 'ui-kit'

import { outImage, totalPage } from '../../../utils/functions'
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

  /* This should be in a reselect selector */
  const image = outImage(images)

  const { total_hits } = totalItems

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
      <ImageGallery sourceImage={image} />
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPage={totalPage(total_hits)}
        pageCurrent={pageIndex}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  images: state.imagesGalleryPage.items,
  isLoading: state.imagesGalleryPage.isLoading,
  searchText: state.imagesGalleryPage.searchText,
  pageIndex: state.imagesGalleryPage.pageIndex,
  startYear: getStartYear(state),
  endYear: getEndYear(state),
  totalItems: state.imagesGalleryPage.totalItems,
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
  totalItems: exact({
    total_hits: number,
  }).isRequired,
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
