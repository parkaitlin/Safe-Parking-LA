import React from 'react'
import { MainContainer } from './styled'

const ApplyForParking = () => {
  return (
    <MainContainer>
      <div>

        <h1>
          Overnight Parking FAQ
        </h1>
        <h1>Amenities</h1>
        <br />
        <ul>
          <li>A safe place to park each night</li>
          <li>Restroom access</li>
          <li>A security guard.</li>
          <li>Social Service resources.</li>
        </ul>
        <h1>Our Goal</h1>
        <br />
        <ol>
          <li> <span>First</span> we must decriminalize sleeping in a vehicle which in most of Los Angeles illegal.
          The City of LA is currently creating a Safe Parking Program that will provide case management and reach out to those in need of a safe parking spot.</li>
          <li> <span>Second</span> we use our private donations to secure parking lots around the city as gathering points.</li>
          <li><span>Lastly</span>, we will brand these available parking lots as designated Safe Parking LA.
          We reach out to those in need of a parking space and update the availability of a parking space.
          We will work with law enforcement for a 'grace period' with a vehicle with the Safe Parking LA map on the vehicle.
          We will ultimately create gathering points around the city for parking lots that are unusued during evening hours as a safe place to park for the night.</li>
        </ol>
        <section>
          <div>
            <img src="https://i.imgur.com/uapO4NZ.png" />
          </div>
          <div>
            <button>Interest Form</button>
            <br />
            <button>Compliance Form</button>
          </div>
        </section>
      </div>
    </MainContainer>
  )
}


export default ApplyForParking