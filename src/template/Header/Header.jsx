import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Preloader from 'ui-kit/preloader/preloader'

import { requestImages } from '../../redux/actions'

import '../scss/Hedaer.scss'

const Header = ({ imageDaily, onImgFetch, isLoading }) => {
  useEffect(() => {
    onImgFetch()
  }, [onImgFetch])

  if (isLoading) {
    return <Preloader />
  }
  const { image } = imageDaily
  return (
    <div className="wrapper">
      <div className="wrapper__bg">
        <img src={image.url} alt="" />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  imageDaily: state.imgDailyPage,
  isLoading: state.imgDailyPage.isLoading,
})

const mapDispatchToProps = {
  onImgFetch: requestImages,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
