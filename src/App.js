// import React from 'react' // this is no longer required in react 17.x
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './Layout/Navbar'
import Home from './Pages/Home'
import Create from './Pages/Create'


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
          <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App