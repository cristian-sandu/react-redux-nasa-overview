import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.scss'
import ImgGallery from 'common/components/img-gallery/ImgGallery'

import Header from './template/Header/Header'
import Footer from './template/Footer/Footer'
import MainMenu from './template/Menu/Menu'
import Nasa from './template/Nasa/Nasa'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <MainMenu />
        <div className="container-wrapper">
          <Route path="/gallery/" render={() => <ImgGallery />} />
          <Route exact path="/" render={() => <Header />} />
          <Route exact path="/" render={() => <Nasa />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
