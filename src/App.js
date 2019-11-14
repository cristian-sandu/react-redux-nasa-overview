import React, { Suspense } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import { GALLERY_PATH, MAIN_PATH } from 'common/constants'
import ImgGallery from 'common/components/img-gallery/'

import Preloader from './ui-kit/preloader/preloader'
import './App.scss'
import { Footer, Header, MainMenu } from './templates'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Preloader />}>
        <MainMenu />
        <div className="container-wrapper">
          <Route exact path={MAIN_PATH} component={Header} />
          <Route path={GALLERY_PATH} component={ImgGallery} />
        </div>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
