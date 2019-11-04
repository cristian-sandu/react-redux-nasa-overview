import React from 'react'
import './App.css'
import Button from 'antd/es/button'
import Icon from 'antd/es/icon'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Icon type="smile" theme="outlined" />
        <p>{`Edit <code>src/App.js</code> and save to reload.`}</p>
        <p> Hello </p>
        <Button type="primary">Button</Button>
      </header>
    </div>
  )
}

export default App
