import React,{Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import * as routes from './constants/routes'

import Home from './Home'
import Test from '../components/TEST/test'
import Navbar from './Navbar'
import Footer from './Footer'
import '../global.css'

class App extends Component {
  state = {

  }
  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path={routes.HOME} render={()=> <Home/>} />
          <Route exact path={routes.RESOURCE} render={()=> <Test/>} />
        </Switch>
        <Footer/>
      </div>
    )

  }
}


export default App