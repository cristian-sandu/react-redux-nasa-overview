import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { array, bool, func, string, number, objectOf } from 'prop-types'

import { requestImagesGallery } from 'redux/actions'
import { Preloader, Search, Pagination, SliderYears } from 'ui-kit'
import noImage from 'assets/images/no-image.png'

import { outImage, totalPage } from '../../function'
import style from '../scss/ImgGallery.module.scss'

const ImagesGallery = ({
  isLoading,
  images,
  onImagesGallery,
  searchText,
  pageIndex,
  yearStart,
  yearEnd,
  totalItems,
}) => {
  useEffect(() => {
    onImagesGallery()
  }, [onImagesGallery, searchText, pageIndex, yearStart, yearEnd])

  if (isLoading) return <Preloader />

  /* This should be in a reselect selector */
  const image = outImage(images)

  const { total_hits } = totalItems

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__search}>
        <Search />
        <SliderYears />
      </div>
      <div className={style.wrapper__container}>
        {image.map(i => (
          <div className={style.wrapper__container__content}>
            <img src={i.href || noImage} alt="" />
          </div>
        ))}
      </div>
      <Pagination totalPage={totalPage(total_hits)} pageCurrent={pageIndex} />
    </div>
  )
}

const mapStateToProps = state => ({
  images: state.imagesGalleryPage.items,
  isLoading: state.imagesGalleryPage.isLoading,
  searchText: state.imagesGalleryPage.searchText,
  pageIndex: state.imagesGalleryPage.pageIndex,
  yearStart: state.imagesGalleryPage.yearStart,
  yearEnd: state.imagesGalleryPage.yearEnd,
  totalItems: state.imagesGalleryPage.totalItems,
})

const mapDispatchToProps = {
  onImagesGallery: requestImagesGallery,
}

ImagesGallery.propTypes = {
  images: objectOf(array).isRequired,
  totalItems: objectOf(number).isRequired,
  searchText: string.isRequired,
  isLoading: bool.isRequired,
  pageIndex: number.isRequired,
  yearStart: number.isRequired,
  yearEnd: number.isRequired,
  onImagesGallery: func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImagesGallery)
