import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { bool, func, string } from 'prop-types'

import { Preloader } from 'ui-kit'
import { requestImages } from 'redux/actions'
import {
  getDailyImageSelector,
  getDailyImageIsLoadingSelector,
} from 'redux/selectors/selectors'

import Nasa from '../Nasa/Nasa'
import './Home.scss'

const Header = ({ imageDaily, onImgFetch, isLoading }) => {
  useEffect(() => {
    onImgFetch()
  }, [onImgFetch])

  return isLoading ? (
    <Preloader />
  ) : (
    <div>
      <div className="wrapper__daily">
        <div className="wrapper__bg">
          <img src={imageDaily} alt="" />
        </div>
      </div>
      <Nasa />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  imageDaily: getDailyImageSelector,
  isLoading: getDailyImageIsLoadingSelector,
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
