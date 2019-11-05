import React from 'react'

import Button from 'ui-kit/button'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`Edit <code>src/App.js</code> and save to reload.`}</p>
        <p> Hello </p>
        <Button title="Test" />
      </header>
    </div>
  )
}

export default App
