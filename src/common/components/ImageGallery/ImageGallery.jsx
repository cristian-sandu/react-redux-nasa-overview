import React from 'react'
import { arrayOf, object } from 'prop-types'

import noImage from 'assets/images/no-image.png'

import { SITE_NAME } from '../../constants'

import style from './ImageGallery.module.scss'

const ImageGallery = ({ sourceImage }) => {
  return (
    <div className={style.wrapper__container}>
      {sourceImage.map(i => (
        <div className={style.wrapper__container__content} key={i.href}>
          <img src={i.href || noImage} alt={SITE_NAME} />
        </div>
      ))}
    </div>
  )
}

ImageGallery.propTypes = {
  sourceImage: arrayOf(object).isRequired,
}

export default ImageGallery
