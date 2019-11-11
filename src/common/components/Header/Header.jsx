import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import '../scss/Hedaer.scss'
import { requestImages } from '../../../redux/action'
import Preloader from 'ui-kit/preloader/preloader'

const Header = props => {
  const { onImgFetch, isLoading } = props
  useEffect(() => {
    onImgFetch()
  }, [onImgFetch])

  if (isLoading) {
    return <Preloader />
  }

  const image = props.imageDaily.images
  const dailyImage = image[1] && image[1].href

  return (
    <div className="wrapper">
      <div className="wrapper__bg">
        <img src={dailyImage} alt=""/>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    imageDaily: state.imgDailyPage,
    isLoading: state.imgDailyPage.isLoading,
  }
}

// Header.defaultProps = {image.href: null}

const mapDispatchToProps = {
  onImgFetch: requestImages,
}

export default connect( mapStateToProps,  mapDispatchToProps ) (Header)
