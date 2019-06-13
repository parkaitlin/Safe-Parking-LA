import React from 'react'
import { MainContainer } from './styled'

const ApplyForParking = () => {
  return (
    <MainContainer>
      <div>

        <h1>
          Overnight Parking FAQ
        </h1>
        <br />

        <aside>
          <h1>Amenities</h1>
          <ul>
            <li>Guards</li>
            <li>Bathrooms</li>
            <li>Legal place to park over night</li>
          </ul>
        </aside>

        <h1>Process</h1>

        <br />

        <ol>
          <li>Call to inquire about eligibility.</li>
          <li>Complete online application form.</li>
          <li>Set up a 5 minute appointment.</li>
        </ol>

        <section>
          <div>
            <img src="https://i.imgur.com/uapO4NZ.png" />
          </div>
          <div>
            <button>Apply for Permit</button>
            <br />
            <button>Compliance Form</button>
            <p>Safety rules during your</p>
          </div>
        </section>
      </div>
    </MainContainer>
  )
}


export default ApplyForParking