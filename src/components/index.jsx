import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import * as routes from './constants/routes'

import Home from './Home'
import Resources from '../components/Resources'
import Navbar from './Navbar'

import ApplyForParking from '../components/ApplyForParking'

import '../global.css'

class App extends Component {
  state = {}
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path={routes.HOME} render={() => <Home />} />
          <Route exact path={routes.RESOURCE} render={() => <Resources />} />
          <Route
            exact
            path={routes.APPLYFORPARKING}
            render={() => <ApplyForParking />}
          />
        </Switch>
      </div>
    )
  }
}

export default App
