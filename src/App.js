import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { PATH_URL } from 'common/constants'
import { ImageGallery } from 'common/components'
import { Preloader } from 'ui-kit'
import { Footer, Header, MainMenu } from 'templates'
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
            <Route path={GALLERY} component={ImageGallery} />
          </Switch>
        </div>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
