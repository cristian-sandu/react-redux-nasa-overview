import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.scss'
import ImgGallery from 'common/components/img-gallery/'

import Header from './templates/Header'
import Footer from './templates/Footer'
import MainMenu from './templates/Menu'
import Nasa from './templates/Nasa'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <MainMenu />
        <div className="container-wrapper">
          <Route path="/gallery/" component={ImgGallery} />
          <Route exact path="/" component={Header} />
          <Route exact path="/" component={Nasa} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
