import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [text, setText] = React.useState('')
  React.useEffect(() => {
    fetch('/.netlify/functions/node-fetch')
      .then((x) => x.json())
      .then((x) => setText(x.value))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{text}</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
