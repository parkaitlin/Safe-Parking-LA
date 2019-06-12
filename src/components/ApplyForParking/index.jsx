import React from 'react'
import { MainContainer } from './styled'

const ApplyForParking = () => {
  return (
    <MainContainer>
      <div>
        <h1>
          Apply to park your car in
          <br />
          a designated parking lot.
        </h1>
      </div>
      <main>
        <div>
          <h1>Amenties</h1>
          <ul>
            <li>Bathroom</li>
            <li>Guards</li>
            <li>Safe parking overnight</li>
          </ul>
        </div>
        <div>
          <h1>Process</h1>
          <ol>
            <li>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
          </ol>
        </div>
        <section>
          <div>
            <img src="https://i.imgur.com/h1AChnN.png" />
          </div>
          <div>
            <button>
              Interest Form
            </button>
            <button>
              Compliance Form
            </button>
          </div>
        </section>
      </main>
    </MainContainer>
  )
}


export default ApplyForParking