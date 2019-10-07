import React, { Component } from 'react'
import Testimonials from '../Testimonials'
import { ParallaxBanner } from 'react-scroll-parallax'
import Footer from '../Footer'

import {
  Wrapper,
  Info,
  Para,
  Para2,
  Title,
  UpperButton,
  LowerButton,
  ButtnHolder,
  TopTitle,
  TopDesc,
  SecDesc,
  Banner,
  Banner2
} from './style'

class Home extends Component {
  render() {
    return (
      <div>
        <ParallaxBanner
          layers={[
            {
              image:
                'https://static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/t/5c16fb850e2e72b118614e03/1545010086750/20181026_112113.jpg?format=2500w',
              amount: 0.4
            }
          ]}
          style={{
            height: '5000px',
            position: 'absolute',
            overflow: 'none',
            width: '100vw',
            height: '41vw',
            zIndex: '-4',
            marginTop: '-10vw',
            marginBottom: '8vw'
          }}
        ></ParallaxBanner>
        <ParallaxBanner
          layers={[
            {
              image:
                'https://images.unsplash.com/photo-1524499993294-a14b20e9322c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
              amount: 0.4
            }
          ]}
          style={{
            position: 'absolute',
            width: '100vw',
            height: '50vw',
            zIndex: '-4',
            marginTop: '85vw'
          }}
        ></ParallaxBanner>
        <TopTitle>NOBODY PLANS TO BE HOMELESS</TopTitle>
        <TopDesc>
          Safe Parking LA provides a safe and legal intervention for people
          experiencing homelessness who are living in their vehicles.
        </TopDesc>
        <SecDesc>
          In Los Angeles County, there are over 15,700 people living in their
          vehicles each night. Individuals living in their cars represent over
          25% of the population of people experiencing homelessness in LA
          County. We are here to help.
        </SecDesc>
        <Wrapper>
          <form action='/apply'>
            <UpperButton>APPLY FOR PARKING</UpperButton>
          </form>
          <form action='/resources'>
            <UpperButton>ADDITIONAL RESOURCES</UpperButton>
          </form>
          <Banner />
        </Wrapper>
        <Testimonials />
        <Info>
          <div>
            <Title>WHAT WE DO</Title>
            <Para>
              Our mission is simple, we want to provide safe parking options for
              people experiencing homelessness in their vehicles across Los
              Angeles.
            </Para>
            <Para2>
              Founded in 2016, Safe Parking LA is a coordinating organization
              which assists homeless families and individuals living in their
              vehicles. We support the implementation of "Safe Parking Lots",
              which provide individuals a safe place to park each night,
              restroom access, a security guard, and social service resources.
              We also offer additional resources to help get you back into a
              home.
            </Para2>

            <Banner2 />
          </div>
          <ButtnHolder>
            <form action='/apply'>
              <LowerButton>APPLY FOR PARKING</LowerButton>
            </form>
            <form action='/resources'>
              <LowerButton>ADDITIONAL RESOURCES</LowerButton>
            </form>
          </ButtnHolder>
        </Info>
        <Footer />
      </div>
    )
  }
}
export default Home
