import React from 'react'
import { Col, Row } from 'antd'

import '../scss/Nasa.scss'

const Nasa = () => (
  <div className="container">
    <Row gutter={[16, 32]}>
      <Col span={8} className="container__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          cum impedit iste nihil perspiciatis quisquam tenetur ullam!
          Distinctio, expedita fuga maxime minus nobis pariatur,quiarecusandae
          sint sunt totam vitae!
        </p>
      </Col>
      <Col span={8} className="container__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          cum impedit iste nihil perspiciatis quisquam tenetur ullam!
          Distinctio, expedita fuga maxime minus nobis pariatur, quiarecusandae
          sint sunt totam vitae!
        </p>
      </Col>
      <Col span={8} className="container__content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          cum impedit iste nihil perspiciatis quisquam tenetur ullam!
          Distinctio, expedita fuga maxime minus nobis pariatur, quia sint sint
          sunt totam vitae!
        </p>
      </Col>
    </Row>
  </div>
)

export default Nasa
