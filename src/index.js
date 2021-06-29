import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'

/*
  To create this project: npx create-react-app name-of-your-app

  To start the React server, from a Terminal run
    npm start
    cntl+c to stop the server
  
  To start json servier
    1. from the *project* directory
    2. from *another* Terminal run
    npx json-server --watch data/db.json --port 8000

  To use the React (page) router, from a Terminal run
    npm install react-router-dom (or optionally react-router-dom@5 to specify version 5)
  
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

