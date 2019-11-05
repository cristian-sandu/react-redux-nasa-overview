import React from 'react'
import PropTypes from 'prop-types'
import { Button as AntdButton } from 'antd'

const Button = ({ title }) => (
  <span>
    <AntdButton style={{ fontSize: '25px' }}>{title}</AntdButton>
  </span>
)
Button.propTypes = {
  title: PropTypes.func.isRequired,
}
export default Button
