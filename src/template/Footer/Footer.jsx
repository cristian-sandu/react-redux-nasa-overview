import React from 'react'
import { Icon } from 'antd'

import '../scss/Footer.scss'
import { COPY_TEXT } from 'common/constants'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <p className="footer__content-text">
          <Icon type="copyright" />
          {COPY_TEXT}
        </p>
      </div>
    </div>
  )
}

export default Footer
