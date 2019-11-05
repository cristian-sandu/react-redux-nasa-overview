import React from 'react'

import { EMPTY_STRING } from 'common/constants'
import { UTIL } from 'utils'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Edit <code>src/App.js</code> and save to reload.${UTIL} ${EMPTY_STRING}`}</p>
        <p> Hello </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
