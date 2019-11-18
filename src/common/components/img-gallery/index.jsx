import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { requestImagesGallery } from 'redux/actions'
import { array, bool, func, string, number } from 'prop-types'

import { Preloader, Search, Pagination, SliderYears } from 'ui-kit'

import noImage from 'assets/images/no-image.png'
import style from 'common/components/scss/ImgGallery.module.scss'

const ImagesGallery = ({ isLoading, images, onImagesGallery, searchText, page, yearStart, yearEnd }) => {
  useEffect(() => {
    onImagesGallery()
  }, [onImagesGallery, searchText, page, yearStart, yearEnd])

  const image = images.flatMap(img => img.links)

  if (isLoading) {
    return <Preloader/>
  }

  return (
    <div className={style.wrapper}>
      <div className={style.wrapper__search}>
        <Search/>
        <SliderYears/>
      </div>
      <div className={style.wrapper__container}>
        {image.map(i =>
          <div className={style.wrapper__container__content}>
            <img src={i.href ? i.href : noImage} alt=""/>
          </div>,
        )
        }
      </div>
      <Pagination pageCurrent={page}/>
    </div>
  )
}


const mapStateToProps = state => ({
  images: state.imagesGalleryPage.items,
  isLoading: state.imagesGalleryPage.isLoading,
  searchText: state.imagesGalleryPage.searchText,
  page: state.imagesGalleryPage.page,
  yearStart: state.imagesGalleryPage.yearStart,
  yearEnd: state.imagesGalleryPage.yearEnd,
})

const mapDispatchToProps = {
  onImagesGallery: requestImagesGallery,
}

ImagesGallery.propTypes = {
  images: array.isRequired,
  searchText: string.isRequired,
  isLoading: bool.isRequired,
  page: number.isRequired,
  yearStart: number.isRequired,
  yearEnd: number.isRequired,
  onImagesGallery: func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImagesGallery)
