import React from 'react'
import { MainContainer } from './styled'
import { Title } from './styledTitle'

const ApplyForParking = () => {
  return (
    <>
      <Title>
        <h1>
          APPLY TO PARK
        </h1>
      </Title>
      <MainContainer>
        <div>
          <aside>

            <h1>
            Our mission is to provide safe parking options for people experiencing homelessness in their vehicles. Each parking lot includes the following amenities:
            </h1>
            <ul>
              <li>Guards</li>
              <li>Bathrooms</li>
              <li>Legal place to park over night</li>
            </ul>
          </aside>

          <br />
          <br />

          <h1>Process</h1>
          
          <br />

          <ol>
            <li>Call us at (213) 793-8493 to determine your eligibility.</li>
            <li>Start an application by filling out *both* the Interest Form and Compliance Form below.</li>
            <li>Set up a 5 minute appointment with our team</li>
            <li>Be sure to check out our other <a href="#">Resources</a>, <a href="#">FAQs</a>, and <a href="#">Green Streets</a>.</li>
          </ol>

          <section>
            <div>
              <img src="https://i.imgur.com/uapO4NZ.png" />
            </div>
            <div>
              <br />
              <button>
                Interest Form
              </button>
              <br />
              <button>
                Compliance Form
              </button>
              {/* <p>
                Safety rules during your stay.
              </p> */}
                <br />
              <p>
                Take the first steps towards safe parking.
              </p>
            </div>
          </section>
        </div>
      </MainContainer>
    </>
  )
}


export default ApplyForParking