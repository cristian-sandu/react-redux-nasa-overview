import React from 'react'

import style from 'common/components/scss/ImgGallery.module.scss'

import noImage from 'assets/images/no-image.png'

const ImgGallery = () => (
  <div className={style.container}>
    <div className={style.container__content}>
      <img src={noImage} alt="" />
    </div>
    <div className={style.container__content}>
      <img src={noImage} alt="" />
    </div>
    <div className={style.container__content}>
      <img src={noImage} alt="" />
    </div>
    <div className={style.container__content}>
      <img src={noImage} alt="" />
    </div>
    <div className={style.container__content}>
      <img src={noImage} alt="" />
    </div>
    <div className={style.container__content}>
      <img src={noImage} alt="" />
    </div>
    <div className={style.container__content}>
      <img src={noImage} alt="" />
    </div>
    <div className={style.container__content}>
      <img src={noImage} alt="" />
    </div>
  </div>
)

export default ImgGallery
