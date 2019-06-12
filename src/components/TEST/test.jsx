import React, {Component} from 'react'
import { transportation } from '../../MODELS/TRANSPORTATION'

class Test extends Component {
  state = {

  }
  render(){
    return (
      <div>
      <h1>Please select your Region</h1>
      <p>
        { transportation[0].PROGRAM_NAME }
      </p>
    </div>
    )
  }
}

export default Test