import React from 'react'
import { HomeContainer } from './style'
import personOne from '../../assets/img/personOne.png'
import personTwo from '../../assets/img/personTwo.png'
import personThree from '../../assets/img/personThree.png'
import logo from '../../assets/img/logo.png'

const Home = () => {
  return (
    <HomeContainer>
      <div className='Top-Container'>
        <div className='logo-wrapper'>
          <div className='logo-container'>
            <img src={logo} alt='logo' />
          </div>
        </div>
        <div className='p-content'>
          <div className='p-wrapper'>
            <p>
              Safe Parking LA provides a safe and legal intervention for people
              experiencing homelessness who are living in their vehicles.
            </p>

            <p>
              In Los Angeles County, there are over 15,700 people living in
              their vehicles each night. Individuals living in their cars
              represent over 25% of the population of people experiencing
              homelessness in LA County.
            </p>
            <p>We are here to help.</p>
          </div>
        </div>
      </div>
      <div className='Middle-Container'>Hey</div>
      <div className='Bottom-Container'>Hey</div>
    </HomeContainer>
  )
}

export default Home
