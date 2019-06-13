import React from 'react'
import { MainContainer } from './styled'
import { Title } from './styledTitle'

const ApplyForParking = () => {
  return (
    <>
      <Title>
        <h1>
          Apply To Park
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
            <li>Call to inquire about eligibility.</li>
            <li>Complete online application form for a permit.</li>
            <li>Complete online compliance form.</li>
            <li>Set up a 5 minute appointment.</li>
          </ol>

          <section>
            <div>
              <img src="https://i.imgur.com/uapO4NZ.png" />
            </div>
            <div>
              <br />
              <button>
                Apply for Permit
              </button>
              <br />
              <button>
                Compliance Form
              </button>
              {/* <p>
                Safety rules during your stay.
              </p> */}
              <p>
                <br />
                You must have the following:
                <p>
                  <li>
                    driver's license
                  </li>
                </p>
                <p>
                  <li>
                    vehicle registration
                  </li>
                </p>
                <p>
                  <li>insurance</li>
                </p>
              </p>
            </div>
          </section>
        </div>
      </MainContainer>
    </>
  )
}


export default ApplyForParking