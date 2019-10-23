import React from 'react'
import { HomeContainer } from './style'
import personOne from '../../assets/img/personOne.png'
import personTwo from '../../assets/img/personTwo.png'
import personThree from '../../assets/img/personThree.png'
import logo from '../../assets/img/logo.png'

const Home = () => {
  return (
    <HomeContainer>
      <div className='Top-Container Container-Settings'>
        <div className='logo-content content-alignment'>
          <div className='logo-wrapper wrapper-alignment'>
            <img src={logo} alt='logo' />
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
            <button>Apply To Park</button>
            <button>Additional Resources</button>
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
              <img src={personOne} alt='placedholder for human' />
              <p>
                “Safe Parking LA helped me find a safe place to sleep
                overnight.“
              </p>
            </div>
            <div className='middle-stories'>
              <img src={personTwo} alt='placedholder for human' />
              <p>
                “My daughter and I are so thankful for Safe Parking providing a
                safe place in my time of need.”
              </p>
            </div>
            <div className='middle-stories'>
              <img src={personThree} alt='placeholder for human' />
              <p>
                “I was able to sleep safely and get resources to help me get
                back into housing.“
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='Bottom-Container'>Hey</div>
    </HomeContainer>
  )
}

export default Home
