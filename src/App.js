import React from 'react'
import './App.scss'

import Header from './template/Header/Header'
import Footer from './template/Footer/Footer'
import Menu from './template/Menu/Menu'
import Content from './template/Content/Content'

const App = () => {
  return (
    <div>
      <Menu />
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
