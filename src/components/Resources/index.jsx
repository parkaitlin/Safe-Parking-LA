import React, {Component} from 'react'

//models

import { accessPoint } from '../../MODELS/ACCESS_POINTS_CENTERS'
import { groceries } from '../../MODELS/GROCERIES'
import { laundries } from '../../MODELS/LAUNDRY'
import { meals } from '../../MODELS/MEALS'
import { mentalHealthCenters} from '../../MODELS/MENTAL_HEALTH'
import { showers } from '../../MODELS/SHOWER'
import { storages } from '../../MODELS/STORAGE'
import { subAbuseCenters } from '../../MODELS/SUBSTANCE_ABUSE_CENTER'
import { transportationOptions } from '../../MODELS/TRANSPORTATION'

class Resources extends Component {
  state = {
    grocery: false,
    meal: false,
    restroom: false,
    shower: false,
    laundry: false,
    transportation: false,
    storage: false,
    mentalHealth: false,
    accessPoint: false,
    subAbuse: false,
    city: '',
    // resources: [
    //   grocery = [],
    //   meal = [],
    //   restroom = [],
    //   shower = [],
    //   laundry = [],
    //   transportation = [],
    //   storage = [],
    //   mentalHealth = [],
    //   accessPoint = [],
    //   subAbuse = []
    // ]
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  getResources = ()=>{
    //const {grocery, meal, restroom, shower, laundry, transportation, storage, mentalHealth, accessPoint, subAbuse} = this.state
    // if(this.state.grocery){
    //   for(let i = 0; i < groceries.length; i++){
    //     if(groceries[i].NEIGHBORHOOD === '')
    //   }
    // }
  }
  render(){
    return (
      <div>
      <h1>Please select your Region</h1>
      <p>
        {/* { transportation[0].PROGRAM_NAME } */}
      </p>
      <label>Location: </label>
      {/* <input className="state-input" list='cities' name='state' placeholder='state' value= onChange={this.handleChange} /> */}

      <h2>I need ...</h2>
        <label>a meal</label><input type="checkbox" name="meal" value='true' onChange={this.handleChange}/>
        <label>groceries</label><input type="checkbox" name="grocery" value='true' onChange={this.handleChange}/>
        <label>a restroom</label><input type="checkbox" name="restroom" value='true' onChange={this.handleChange}/>
        <label>a shower</label><input type="checkbox" name="shower" value='true' onChange={this.handleChange}/>
        <label>to do laundry</label><input type="checkbox" name="laundry" value='true' onChange={this.handleChange}/>
        <label>transportation</label><input type="checkbox" name="transportation" value='true' onChange={this.handleChange}/>        
        <label>to find an access point</label><input type="checkbox" name="accessPoint" value='true' onChange={this.handleChange}/>
        <label>to find a center for mental health</label><input type="checkbox" name="mentalHealth" value='true' onChange={this.handleChange}/>
        <label>to find a center for substance abuse</label><input type="checkbox" name="subAbuse" value='true' onChange={this.handleChange}/>
    </div>
    )
  }
}

export default Resources;