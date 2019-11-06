import React from 'react'
import { string } from 'prop-types'
import { Button as ButtonAntD } from 'antd'

import './button.scss'

const DEFAULT_TITLE = 'Submit'

const Button = ({ title }) => (
  <span className="ui-kit__button-container">
    <ButtonAntD className="ui-kit__button">{title}</ButtonAntD>
  </span>
)

Button.propTypes = {
  title: string,
}

Button.defaultProps = {
  title: DEFAULT_TITLE,
}

export default Button
