import React from 'react'
import { string } from 'prop-types'
import { Button as ButtonAntD } from 'antd'
import './scss/button.scss'

const DEFAULT_TITLE = 'Submit'
const Button = ({ title }) => (
  <span>
    <ButtonAntD className="test">{title}</ButtonAntD>
  </span>
)

Button.propTypes = {
  title: string,
}

Button.defaultProps = {
  title: DEFAULT_TITLE,
}

export default Button
