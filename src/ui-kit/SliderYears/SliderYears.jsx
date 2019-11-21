import React from 'react'
import { func, number } from 'prop-types'
import { Slider } from 'antd'

import { getYear } from 'utils/functions'

import './sliderYears.scss'

const SliderYears = ({
  setCurrentYearsDate,
  setCurrentYearsAfter,
  startYear,
  endYear,
}) => {
  const setYearsHandler = value => {
    setCurrentYearsDate(value)
  }

  const setYearsAfterChange = value => {
    setCurrentYearsAfter(value)
  }

  return (
    <div>
      <Slider
        className="ui-kit__sliderYears"
        range
        delay
        step={1}
        min={1920}
        max={getYear()}
        defaultValue={[startYear, endYear]}
        onChange={setYearsHandler}
        onAfterChange={setYearsAfterChange}
      />
    </div>
  )
}

SliderYears.propTypes = {
  startYear: number.isRequired,
  endYear: number.isRequired,
  setCurrentYearsDate: func.isRequired,
  setCurrentYearsAfter: func.isRequired,
}
export default SliderYears
