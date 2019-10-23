import React from 'react'
import { HomeContainer } from './style'
import personOne from '../../assets/img/personOne.png'
import personTwo from '../../assets/img/personTwo.png'
import personThree from '../../assets/img/personThree.png'
import logo from '../../assets/img/logo.png'

import * as routes from '../constants/routes'
const Home = () => {
  return (
    <HomeContainer>
      <div className='Top-Container Container-Settings'>
        <div className='logo-content content-alignment'>
          <div className='logo-wrapper wrapper-alignment'>
            <img src='https://i.imgur.com/5xVSaTJ.png' alt='logo' />
          </div>
        </div>
        <div className='p-content content-alignment'>
          <div className='p-wrapper wrapper-alignment'>
            <p>
              Safe Parking LA provides a safe and legal intervention for people
              experiencing homelessness who are living in their vehicles.
            </p>
            <br />
            <p>
              In Los Angeles County, there are over 15,700 people living in
              their vehicles each night. Individuals living in their cars
              represent over 25% of the population of people experiencing
              homelessness in LA County.
            </p>
            <br />
            <p>We are here to help.</p>
          </div>
        </div>
        <div className='btn-content content-alignment'>
          <div className='btn-wrapper wrapper-alignment'>
            <a href={routes.APPLYFORPARKING}>Apply To Park</a>
            <a href={routes.RESOURCE}>Additional Resources</a>
          </div>
        </div>
      </div>
      <hr />
      <div className='Middle-Container'>
        <div className='middle-title-content'>
          <h1>Who We Help</h1>
        </div>
        <div className='middle-stories-content '>
          <div className='middle-stories-wrapper '>
            <div className='middle-stories'>
              <img
                src='https://i.imgur.com/IVmGJVb.png'
                alt='placedholder for human'
              />
              <p>
                “Safe Parking LA helped me find a safe place to sleep
                overnight.“
              </p>
            </div>
            <div className='middle-stories'>
              <img
                src='https://i.imgur.com/A617kFj.png'
                alt='placedholder for human'
              />
              <p>
                “My daughter and I are so thankful for Safe Parking providing a
                safe place in my time of need.”
              </p>
            </div>
            <div className='middle-stories'>
              <img
                src='https://i.imgur.com/6AjrXBA.png'
                alt='placeholder for human'
              />
              <p>
                “I was able to sleep safely and get resources to help me get
                back into housing.“
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='Bottom-Container'>
        <div className='bottom-title-content'>
          <h1>What We Do</h1>
        </div>
        <div className='bottom-p-content'>
          <div className='bottom-p-wrapper'>
            <p>
              Our mission is simple, we want to provide safe parking options for
              people experiencing homelessness in their vehicles across Los
              Angeles.
            </p>
            <br />
            <p>
              Founded in 2016, Safe Parking LA is a coordinating organization
              which assists homeless families and individuals living in their
              vehicles. We support the implementation of "Safe Parking Lots",
              which provide individuals a safe place to park each night,
              restroom access, a security guard, and social service resources.
            </p>
            <br />
            <p>
              We also offer additional resources to help get you back into a
              home.
            </p>
            <div className='btn-content content-alignment'>
              <div className='btn-wrapper wrapper-alignment'>
                <a href={routes.APPLYFORPARKING}>Apply To Park</a>
                <a href={routes.RESOURCE}>Additional Resources</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeContainer>
  )
}

export default Home
