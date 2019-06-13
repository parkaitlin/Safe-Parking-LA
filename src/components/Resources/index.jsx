import React, {Component} from 'react'
import SpaOne from './spaOne'
import SpaTwo from './spaTwo'
import SpaThree from './spaThree'
import SpaFour from './spaFour'
import SpaFive from './spaFive'
import SpaSix from './spaSix'
import SpaSeven from './spaSeven'
import SpaEight from './spaEight'

//models

import { accessPoint as accessPointResource } from '../../MODELS/ACCESS_POINTS_CENTERS'
import { groceries as groceryResource } from '../../MODELS/GROCERIES'
import { laundryResource } from '../../MODELS/LAUNDRY'
import { mealResource } from '../../MODELS/MEALS'
import { mentalHealthResource} from '../../MODELS/MENTAL_HEALTH'
import { showerResource } from '../../MODELS/SHOWER'
import { storageResource } from '../../MODELS/STORAGE'
import { subAbuseResource } from '../../MODELS/SUBSTANCE_ABUSE_CENTER'
import { transportationResource } from '../../MODELS/TRANSPORTATION'

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
    groceries: [],
    meals: [],
    restrooms: [],
    showers: [],
    laundryOptions: [],
    transport: [],
    storageOptions: [],
    mentalHealthCenters: [],
    accessPoints: [],
    subAbuseCenters: []
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  getResources = ()=>{
    console.log('clicked')
    const {grocery, meal, restroom, shower, laundry, transportation, storage, mentalHealth, accessPoint, subAbuse, city} = this.state
    if(grocery === 'true'){
      console.log('grocery is true')
      const array = []
      for(let i = 0; i < groceryResource.length; i++){
        if(groceryResource[i].NEIGHBORHOOD === city){
          array.push(groceryResource[i])
        }
      }
      console.log(array)
      // this.setState({
      //   groceries: array
      // })
    }
  }
  render(){
    const {city, grocery, meal, restroom, shower, laundry, transportation, storage, mentalHealth, accessPoint, subAbuse} = this.state
    return (
      <div>
      <h1>Let's start with your neighborhood:</h1>
      <select className="city-input" name='city' placeholder='Select a City Los Angeles' value={city} onChange={this.handleChange}>
        <option>- - -</option>
        <SpaOne/>
        <SpaTwo/>
        <SpaThree/>
        <SpaFour/>
        <SpaFive/>
        <SpaSix/>
        <SpaSeven/>
        <SpaEight/>

      </select>

      <h2>I need ...</h2>
      <div>
        <label>a meal</label><input type="checkbox" name="meal" value={true} onChange={this.handleChange}/>
        <label>groceries</label><input type="checkbox" name="grocery" value={true} onChange={this.handleChange}/>
        <label>a restroom</label><input type="checkbox" name="restroom" value={true} onChange={this.handleChange}/>
        <label>a shower</label><input type="checkbox" name="shower" value={true} onChange={this.handleChange}/>
        <label>to do laundry</label><input type="checkbox" name="laundry" value={true} onChange={this.handleChange}/>
        <label>transportation</label><input type="checkbox" name="transportation" value={true} onChange={this.handleChange}/>        
        <label>to find an access point</label><input type="checkbox" name="accessPoint" value={true} onChange={this.handleChange}/>
        <label>to find a center for mental health</label><input type="checkbox" name="mentalHealth" value={true} onChange={this.handleChange}/>
        <label>to find a center for substance abuse</label><input type="checkbox" name="subAbuse" value={true} onChange={this.handleChange}/>
      </div>
      <button onClick={this.getResources}>Find Resources</button>
      {
        grocery
        && <div>
          <h4>Groceries</h4>
          <div>
            <p>operator</p>
            <p>phone number</p>
            <p>hours of operation</p>
            <p>eligibility</p>
            <p>website</p>
            <p>address</p>
          </div>
        </div>
      }
    </div>
    )
  }
}

export default Resources;
  {/* { transportation[0].PROGRAM_NAME } */}