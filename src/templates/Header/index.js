import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bool, func, string } from 'prop-types'

import { Preloader } from 'ui-kit'

import { requestImages } from '../../redux/actions'
import '../scss/Hedaer.scss'
import Nasa from '../Nasa'

const Header = ({ imageDaily, onImgFetch, isLoading }) => {
  useEffect(() => {
    onImgFetch()
  }, [onImgFetch])

  if (isLoading) {
    return <Preloader />
  }
  return (
    <div>
      <div className="wrapper">
        <div className="wrapper__bg">
          <img src={imageDaily} alt="" />
        </div>
      </div>
      <Nasa />
    </div>
  )
}

const mapStateToProps = state => ({
  imageDaily: state.imgDailyPage.image,
  isLoading: state.imgDailyPage.isLoading,
})

const mapDispatchToProps = {
  onImgFetch: requestImages,
}

Header.propTypes = {
  imageDaily: string.isRequired,
  onImgFetch: func.isRequired,
  isLoading: bool.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
