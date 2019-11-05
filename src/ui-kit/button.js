import React from 'react'
import { string } from 'prop-types'
import { Button as AntdButton } from 'antd'

const DEFAULT_TITLE = 'Submit'
const Button = ({ title }) => (
  <span>
    <AntdButton style={{ fontSize: '15px' }}>{title}</AntdButton>
  </span>
)
Button.propTypes = {
  title: string,
}
Button.defaultProps = {
  title: DEFAULT_TITLE,
}
export default Button
