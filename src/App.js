import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.scss'
import ImgGallery from 'common/components/img-gallery/'

import { Header, Footer, MainMenu } from './templates'

const App = () => {
  return (
    <BrowserRouter>
      <MainMenu />
      <div className="container-wrapper">
        <Route exact path="/" component={Header} />
        <Route path="/gallery/" component={ImgGallery} />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
