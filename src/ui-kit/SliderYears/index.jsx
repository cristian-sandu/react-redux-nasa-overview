import React from 'react'
import { connect } from 'react-redux'

import { getEndYear, getStartYear } from 'redux/selectors'
import { setCurrentYearsDate, setCurrentYearsAfter } from 'redux/actions'

import { number } from 'prop-types'

import { Slider } from 'antd'

import './sliderYears.scss'


const SliderYears = ({ setCurrentYearsDate, setCurrentYearsAfter, startYear, endYear }) => {

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  const setYearsHandler = (value) => {
      setCurrentYearsDate(value)
  }

  const setYearsAfterChange = value => {
    setCurrentYearsAfter(value)
  }

  return (
    <div>
      <Slider
        className='ui-kit__sliderYears'
        range
        delay
        step={1}
        min={1920}
        max={currentYear}
        defaultValue={[startYear, endYear]}
        onChange={setYearsHandler}
        onAfterChange={setYearsAfterChange}
      />
    </div>
  )
}


const mapStateToProps = state => ({
  startYear: getStartYear(state),
  endYear: getEndYear(state),
})

const mapDispatchToProps = {
  setCurrentYearsDate,
  setCurrentYearsAfter,
}

SliderYears.propTypes = {
  startYear: number.isRequired,
  endYear: number.isRequired,

}
export default connect(mapStateToProps, mapDispatchToProps)(SliderYears)
