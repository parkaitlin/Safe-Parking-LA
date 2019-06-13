import React, {Component} from 'react'

//regions
import SpaOne from './spa/spaOne'
import SpaTwo from './spa/spaTwo'
import SpaThree from './spa/spaThree'
import SpaFour from './spa/spaFour'
import SpaFive from './spa/spaFive'
import SpaSix from './spa/spaSix'
import SpaSeven from './spa/spaSeven'
import SpaEight from './spa/spaEight'

//models
import { accessCenters as accessPointResource } from '../../MODELS/ACCESS_POINTS_CENTERS'
import { groceries as groceryResource } from '../../MODELS/GROCERIES'
import { laundry as laundryResource } from '../../MODELS/LAUNDRY'
import { meals as mealResource } from '../../MODELS/MEALS'
import { mentalHealth as mentalHealthResource} from '../../MODELS/MENTAL_HEALTH'
import { shower as showerResource } from '../../MODELS/SHOWER'
import { storage as storageResource } from '../../MODELS/STORAGE'
import { subAbuse as subAbuseResource } from '../../MODELS/SUBSTANCE_ABUSE_CENTER'
import { transportation as transportResource } from '../../MODELS/TRANSPORTATION'

//lists
import GroceryList from './resourceList/groceries'
import MealList from './resourceList/meals'
import ShowerList from './resourceList/showers'
import LaundryList from './resourceList/laundry'
import TransportList from './resourceList/transport'
import StorageList from './resourceList/storage'
import MentalHealthList from './resourceList/mentalHealth'
import SubAbuseList from './resourceList/subAbuse'
import AccessList from './resourceList/access'


class Resources extends Component {
  state = {
    grocery: false,
    meal: false,
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
    showers: [],
    laundryOptions: [],
    transportOptions: [],
    storageOptions: [],
    mentalHealthCenters: [],
    accessPoints: [],
    subAbuseCenters: []
  }
  handleAll = ()=>{
    if(!this.state.grocery){
      this.setState({
        grocery: true,
        meal: true,
        shower: true,
        laundry: true,
        transportation: true,
        storage: true,
        mentalHealth: true,
        accessPoint: true,
        subAbuse: true,
      })
    } else {
      this.setState({
        grocery: false,
        meal: false,
        shower: false,
        laundry: false,
        transportation: false,
        storage: false,
        mentalHealth: false,
        accessPoint: false,
        subAbuse: false,
      })
    }
  }
  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleCheck = (e)=>{
    if(!this.state[e.target.name]){
      this.setState({
        [e.target.name]: true 
      })
    } else {
      this.setState({
        [e.target.name]: false 
      })
    }
  }
  getResources = ()=>{
    const {grocery, meal, shower, laundry, transportation, storage, mentalHealth, accessPoint, subAbuse, city} = this.state
    if(grocery){
      const array = []
      for(let i = 0; i < groceryResource.length; i++){
        if(groceryResource[i].NEIGHBORHOOD === city){
          array.push(groceryResource[i])
        }
      }
      this.setState({
        groceries: array
      })
    }
    if(meal){
      const array = []
      for(let i = 0; i < mealResource.length; i++){
        if(mealResource[i].NEIGHBORHOOD === city){
          array.push(mealResource[i])
        }
      }
      this.setState({
        meals: array
      })
    }
    if(shower){
      const array = []
      for(let i = 0; i < showerResource.length; i++){
        if(showerResource[i].NEIGHBORHOOD === city){
          array.push(showerResource[i])
        }
      }
      this.setState({
        showers: array
      })
    }
    if(laundry){
      const array = []
      for(let i = 0; i < laundryResource.length; i++){
        if(laundryResource[i].NEIGHBORHOOD === city){
          array.push(laundryResource[i])
        }
      }
      this.setState({
        laundryOptions: array
      })
    }
    if(transportation){
      const array = []
      for(let i = 0; i < transportResource.length; i++){
        array.push(transportResource[i])
    }
      this.setState({
        transportOptions: array
      })
    }
    if(storage){
      const array = []
      for(let i = 0; i < storageResource.length; i++){
        array.push(storageResource[i])
      }
      this.setState({
        storageOptions: array
      })
    }
    if(mentalHealth){
      const array = []
      for(let i = 0; i < mentalHealthResource.length; i++){
        if(mentalHealthResource[i].NEIGHBORHOOD === city){
          array.push(mentalHealthResource[i])
        }
      }
      this.setState({
        mentalHealthCenters: array
      })
    }
    if(accessPoint){
      const array = []
      for(let i = 0; i < accessPointResource.length; i++){
        if(accessPointResource[i].NEIGHBORHOOD === city){
          array.push(accessPointResource[i])
        }
      }
      this.setState({
        accessPoints: array
      })
    }    
    if(subAbuse){
      const array = []
      for(let i = 0; i < subAbuseResource.length; i++){
        if(subAbuseResource[i].NEIGHBORHOOD === city){
          array.push(subAbuseResource[i])
        }
      }
      this.setState({
        subAbuseCenters: array
      })
    }
  }
  render(){
    const {city, grocery, meal, shower, laundry, transportation, storage, mentalHealth, accessPoint, subAbuse} = this.state
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
        <label>A Meal</label><input type="checkbox" name="meal" onClick={this.handleCheck} /><br/>
        <label>Groceries</label><input type="checkbox" name="grocery" onChange={this.handleCheck}/><br/>
        <label>Showers</label><input type="checkbox" name="shower" onChange={this.handleCheck}/><br/>
        <label>Laundry</label><input type="checkbox" name="laundry" onChange={this.handleCheck}/><br/>
        <label>Transportation</label><input type="checkbox" name="transportation" onChange={this.handleCheck}/><br/>
        <label>Storage</label><input type="checkbox" name="storage" onChange={this.handleCheck}/><br/>        
        <label>Access Point Centers</label><input type="checkbox" name="accessPoint" onChange={this.handleCheck}/><br/>
        <label>Mental Health Centers</label><input type="checkbox" name="mentalHealth" onChange={this.handleCheck}/><br/>
        <label>Substance Abuse Centers</label><input type="checkbox" name="subAbuse" onChange={this.handleCheck}/><br/>
        <label>Select All</label><input type="checkbox" onChange={this.handleAll}/>
      </div>
      <button onClick={this.getResources}>Find Resources</button>
      {
        grocery
        && <div>
          <h4>Groceries</h4>
          <GroceryList list={this.state.groceries}/>
        </div>
      }
      {
        meal
        && <div>
          <h4>Meals</h4>
          <MealList list={this.state.meals}/>
        </div>
      }
      {
        shower
        && <div>
          <h4>Showers</h4>
          <ShowerList list={this.state.showers}/>
        </div>
      }
      {
        laundry
        && <div>
          <h4>Laundry</h4>
          <LaundryList list={this.state.laundryOptions}/>
        </div>
      }
      {
        transportation
        && <div>
          <h4>Transportation</h4>
          <TransportList list={this.state.transportOptions}/>
        </div>
      }
      {
        storage
        && <div>
          <h4>Storage</h4>
          <StorageList list={this.state.storageOptions}/>
        </div>
      }
      {
        mentalHealth
        && <div>
          <h4>Mental Health Centers</h4>
          <MentalHealthList list={this.state.mentalHealthCenters}/>
        </div>
      }
      {
        accessPoint
        && <div>
          <h4>Access Point Centers</h4>
          <AccessList list={this.state.accessPoints}/>
        </div>
      }
      {
        subAbuse
        && <div>
          <h4>Substance Abuse Centers</h4>
          <SubAbuseList list={this.state.subAbuseCenters}/>
        </div>
      }
    </div>
    )
  }
}

export default Resources;

