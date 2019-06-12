import React,{Component} from 'react'
import Home from './Home'
import Test from '../components/TEST/test'
import '../global.css'

class App extends Component {
  state = {

  }
  render(){
    return (
      <div>
        <Home/>
        <Test />
      </div>
    )

  }
}


export default App