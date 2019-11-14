import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PATH_URL } from 'common/constants'
import ImgGallery from 'common/components/img-gallery/'
import Preloader from 'ui-kit/preloader/preloader'

import { Footer, Header, MainMenu } from './templates'
import './App.scss'

const { HOME, GALLERY } = PATH_URL

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <MainMenu />
        <div className="container-wrapper">
          <Switch>
            <Route exact path={HOME} component={Header} />
            <Route path={GALLERY} component={ImgGallery} />
          </Switch>
        </div>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
