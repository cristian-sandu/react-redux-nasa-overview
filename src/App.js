import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as components from 'common/lazy-imports'
import { Menu, Footer } from 'common/components'
import { PATH_URL } from 'common/constants'
import { Preloader } from 'ui-kit'

import './App.scss'

const { HOME, IMAGE_GALLERY } = PATH_URL

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Preloader />}>
        <Menu />
        <div className="container-wrapper">
          <Switch>
            <Route exact path={HOME} component={components.Home} />
            <Route path={IMAGE_GALLERY} component={components.ImageGallery} />
          </Switch>
        </div>
        <Footer />
      </Suspense>
    </Router>
  )
}

export default App
