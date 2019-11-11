import React from 'react'
import './App.scss'

import Header from './common/components/Header/Header'
import Footer from './common/components/Footer/Footer'
import Menu from './common/components/Menu/Menu'
import Content from './common/components/Content/Content'

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
