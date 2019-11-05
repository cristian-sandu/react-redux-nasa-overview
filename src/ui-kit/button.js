/* eslint-disable */
import React from 'react'
import { Button as AntdButton } from 'antd'

const Button = ({ title }) => (
  <span>
    <AntdButton style={{ fontSize: '25px' }}> {title} </AntdButton>
  </span>
)

export default Button
