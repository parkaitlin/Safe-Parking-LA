import React, { Component } from 'react'
import { ResourcesContainer } from './styled'
import { Title } from '../ApplyForParking/styledTitle'
import Footer from '../Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

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
import { mentalHealth as mentalHealthResource } from '../../MODELS/MENTAL_HEALTH'
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
    secondCity: false,
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
    cityTwo: '',
    groceries: [],
    meals: [],
    showers: [],
    laundryOptions: [],
    transportOptions: [],
    storageOptions: [],
    mentalHealthCenters: [],
    accessPoints: [],
    subAbuseCenters: [],
    groceries2: [],
    meals2: [],
    showers2: [],
    laundryOptions2: [],
    mentalHealthCenters2: [],
    accessPoints2: [],
    subAbuseCenters2: []
  }
  handleAll = () => {
    if (!this.state.grocery) {
      this.setState({
        grocery: true,
        meal: true,
        shower: true,
        laundry: true,
        transportation: true,
        storage: true,
        mentalHealth: true,
        accessPoint: true,
        subAbuse: true
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
        subAbuse: false
      })
    }
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleCheck = e => {
    if (!this.state[e.target.name]) {
      this.setState({
        [e.target.name]: true
      })
    } else {
      this.setState({
        [e.target.name]: false
      })
    }
  }
  addCity = () => {
    this.setState({
      secondCity: true
    })
  }
  subCity = () => {
    this.setState({
      secondCity: false
    })
  }
  getResources = () => {
    const {
      secondCity,
      grocery,
      meal,
      shower,
      laundry,
      transportation,
      storage,
      mentalHealth,
      accessPoint,
      subAbuse,
      city,
      cityTwo
    } = this.state
    if (grocery) {
      const array = []
      const arrayTwo = []
      for (let i = 0; i < groceryResource.length; i++) {
        if (groceryResource[i].NEIGHBORHOOD === city) {
          array.push(groceryResource[i])
        }
        if (secondCity && groceryResource[i].NEIGHBORHOOD === cityTwo) {
          arrayTwo.push(groceryResource[i])
        }
      }
      this.setState({
        groceries: array,
        groceries2: arrayTwo
      })
    }
    if (meal) {
      const array = []
      const arrayTwo = []
      for (let i = 0; i < mealResource.length; i++) {
        if (mealResource[i].NEIGHBORHOOD === city) {
          array.push(mealResource[i])
        }
        if (secondCity && mealResource[i].NEIGHBORHOOD === cityTwo) {
          arrayTwo.push(mealResource[i])
        }
      }
      this.setState({
        meals: array,
        meals2: arrayTwo
      })
    }
    if (shower) {
      const array = []
      const arrayTwo = []
      for (let i = 0; i < showerResource.length; i++) {
        if (showerResource[i].NEIGHBORHOOD === city) {
          array.push(showerResource[i])
        }
        if (secondCity && showerResource[i].NEIGHBORHOOD === cityTwo) {
          arrayTwo.push(showerResource[i])
        }
      }
      this.setState({
        showers: array,
        showers2: arrayTwo
      })
    }
    if (laundry) {
      const array = []
      const arrayTwo = []
      for (let i = 0; i < laundryResource.length; i++) {
        if (laundryResource[i].NEIGHBORHOOD === city) {
          array.push(laundryResource[i])
        }
        if (secondCity && laundryResource[i].NEIGHBORHOOD === cityTwo) {
          arrayTwo.push(laundryResource[i])
        }
      }
      this.setState({
        laundryOptions: array,
        laundryOptions2: arrayTwo
      })
    }
    if (transportation) {
      const array = []
      for (let i = 0; i < transportResource.length; i++) {
        array.push(transportResource[i])
      }
      this.setState({
        transportOptions: array
      })
    }
    if (storage) {
      const array = []
      for (let i = 0; i < storageResource.length; i++) {
        array.push(storageResource[i])
      }
      this.setState({
        storageOptions: array
      })
    }
    if (mentalHealth) {
      const array = []
      const arrayTwo = []
      for (let i = 0; i < mentalHealthResource.length; i++) {
        if (mentalHealthResource[i].NEIGHBORHOOD === city) {
          array.push(mentalHealthResource[i])
        }
        if (mentalHealthResource[i].NEIGHBORHOOD === cityTwo) {
          arrayTwo.push(mentalHealthResource[i])
        }
      }
      this.setState({
        mentalHealthCenters: array,
        mentalHealthCenters2: arrayTwo
      })
    }
    if (accessPoint) {
      const array = []
      const arrayTwo = []
      for (let i = 0; i < accessPointResource.length; i++) {
        if (accessPointResource[i].NEIGHBORHOOD === city) {
          array.push(accessPointResource[i])
        }
        if (accessPointResource[i].NEIGHBORHOOD === cityTwo) {
          arrayTwo.push(accessPointResource[i])
        }
      }
      this.setState({
        accessPoints: array,
        accessPoints2: arrayTwo
      })
    }
    if (subAbuse) {
      const array = []
      const arrayTwo = []
      for (let i = 0; i < subAbuseResource.length; i++) {
        if (subAbuseResource[i].NEIGHBORHOOD === city) {
          array.push(subAbuseResource[i])
        }
        if (subAbuseResource[i].NEIGHBORHOOD === cityTwo) {
          arrayTwo.push(subAbuseResource[i])
        }
      }
      this.setState({
        subAbuseCenters: array,
        subAbuseCenters2: arrayTwo
      })
    }
  }
  render() {
    const {
      secondCity,
      city,
      cityTwo,
      grocery,
      meal,
      shower,
      laundry,
      transportation,
      storage,
      mentalHealth,
      accessPoint,
      subAbuse
    } = this.state
    return (
      <div>
        <Title>
          <h1>Resources</h1>
        </Title>
        <ResourcesContainer>
          <main>
            {/* 1 */}
            <div>
              <h1>Additional Resources</h1>
              <p>
                During your transition, our sister agencies offer an array of
                services to help you on your way.
                <br />
                Please search below by region and amenities to find a local
                organization that is available to help.
              </p>
            </div>
            {/* 2 */}
            <div>
              <h1>Green Streets</h1>
              <p>
                On January 7, 2017 Los Angeles Municipal Code (LAMC) 85.03 was
                enacted by the Los Angeles City Council. The ordinance maps
                streets where individuals living in their vehicles can park
                overnight (9 PM - 6 AM). These streets are marked on the map as
                "Green Streets". This ordinance will expire July 1, 2018, unless
                extended by the Los Angeles City Council.
                <br />
                <br />
                More "Green Streets" information and all 21 area maps can be
                found{' '}
                <a
                  style={{ color: '#12678b' }}
                  href='https://www.lacity.org/for-residents/popular-information/comprehensive-homeless-strategy-implementation/los-angeles-municipal-code-lamc-8502-vehicle-dwelling'
                >
                  here.
                </a>
              </p>
            </div>
            {/* 3 */}
            <div>
              <h1>Search Resources</h1>
              <p>
                Steps to Search:
                <br />
                1. Select Region from dropdown menu
                <br />
                2. Select need such as food, shower, transportation, etc.
              </p>
            </div>
            {/* 4 */} {/* Dropdown */}
            <div>
              <select
                className='city-input'
                name='city'
                placeholder='Select a City Los Angeles'
                value={city}
                onChange={this.handleChange}
              >
                <option>Select Region</option>
                <SpaOne />
                <SpaTwo />
                <SpaThree />
                <SpaFour />
                <SpaFive />
                <SpaSix />
                <SpaSeven />
                <SpaEight />
              </select>
              {secondCity ? (
                <>
                  <select
                    className='city-input'
                    name='cityTwo'
                    placeholder='Select a City Los Angeles'
                    value={cityTwo}
                    onChange={this.handleChange}
                  >
                    <option>Select Region</option>
                    <SpaOne />
                    <SpaTwo />
                    <SpaThree />
                    <SpaFour />
                    <SpaFive />
                    <SpaSix />
                    <SpaSeven />
                    <SpaEight />
                  </select>
                  <h6>
                    <FontAwesomeIcon icon={faTimes} onClick={this.subCity} />
                  </h6>
                </>
              ) : (
                /* this is the icon */
                <h6>
                  <FontAwesomeIcon icon={faPlusCircle} onClick={this.addCity} />
                </h6>
              )}
            </div>
            <h2>What I need ...</h2>
            {/* 5 */} {/* Label Checkboxes */}
            <div>
              <div>
                <input type='checkbox' name='meal' onClick={this.handleCheck} />
                <label>Meals</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='grocery'
                  onChange={this.handleCheck}
                />
                <label>Food/Groceries</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='shower'
                  onChange={this.handleCheck}
                />
                <label>Showers</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='laundry'
                  onChange={this.handleCheck}
                />
                <label>Laundry</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='transportation'
                  onChange={this.handleCheck}
                />
                <label>Transportation</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='storage'
                  onChange={this.handleCheck}
                />
                <label>Storage</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='accessPoint'
                  onChange={this.handleCheck}
                />
                <label>Access Point Centers</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='mentalHealth'
                  onChange={this.handleCheck}
                />
                <label>Mental Health Centers</label>
              </div>

              <div>
                <input
                  type='checkbox'
                  name='subAbuse'
                  onChange={this.handleCheck}
                />
                <label>Substance Abuse Centers</label>
              </div>

              <div>
                <input type='checkbox' onChange={this.handleAll} />
                <label>Select All</label>
              </div>
            </div>
            <section>
              <button onClick={this.getResources}>Search</button>
            </section>
            {/* 6 */} {/* Search Queries */}
            <div>
              {grocery && (
                <div>
                  <h1>Food/Groceries</h1>
                  <GroceryList
                    list={this.state.groceries}
                    listTwo={this.state.groceries2}
                    secondCity={secondCity}
                    city={city}
                    cityTwo={cityTwo}
                  />
                </div>
              )}
              {meal && (
                <div>
                  <h1>Meals</h1>
                  <MealList
                    list={this.state.meals}
                    listTwo={this.state.meals2}
                    secondCity={secondCity}
                    city={city}
                    cityTwo={cityTwo}
                  />
                </div>
              )}
              {shower && (
                <div>
                  <h1>Showers</h1>
                  <ShowerList
                    list={this.state.showers}
                    listTwo={this.state.showers2}
                    secondCity={secondCity}
                    city={city}
                    cityTwo={cityTwo}
                  />
                </div>
              )}
              {laundry && (
                <div>
                  <h1>Laundry</h1>
                  <LaundryList
                    list={this.state.laundryOptions}
                    listTwo={this.state.laundryOptions2}
                    secondCity={secondCity}
                    city={city}
                    cityTwo={cityTwo}
                  />
                </div>
              )}
              {transportation && (
                <div>
                  <h1>Transportation</h1>
                  <TransportList
                    list={this.state.transportOptions}
                    secondCity={secondCity}
                    city={city}
                    cityTwo={cityTwo}
                  />
                </div>
              )}
              {storage && (
                <div>
                  <h1>Storage</h1>
                  <StorageList
                    list={this.state.storageOptions}
                    secondCity={secondCity}
                    city={city}
                    cityTwo={cityTwo}
                  />
                </div>
              )}
              {mentalHealth && (
                <div>
                  <h1>Mental Health Centers</h1>
                  <MentalHealthList
                    list={this.state.mentalHealthCenters}
                    listTwo={this.state.mentalHealthCenters2}
                    secondCity={secondCity}
                    city={city}
                    cityTwo={cityTwo}
                  />
                </div>
              )}
              {accessPoint && (
                <div>
                  <h1>Access Point Centers</h1>
                  <AccessList
                    list={this.state.accessPoints}
                    listTwo={this.state.accessPoints2}
                    secondCity={secondCity}
                    city={city}
                    cityTwo={cityTwo}
                  />
                </div>
              )}
              {subAbuse && (
                <div>
                  <h1>Substance Abuse Centers</h1>
                  <SubAbuseList
                    list={this.state.subAbuseCenters}
                    listTwo={this.state.subAbuseCenters2}
                    secondCity={secondCity}
                    city={city}
                    cityTwo={cityTwo}
                  />
                </div>
              )}
            </div>
          </main>
        </ResourcesContainer>
      </div>
    )
  }
}

export default Resources
