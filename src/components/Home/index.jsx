import React,{Component} from 'react'
import Testimonials from '../Testimonials'
import styled from 'styled-components'
import {ParallaxBanner} from 'react-scroll-parallax'


const Wrapper=styled.div`
width: 100vw;
    height: 56vw;
    background: #070b0e6b;
    display: inline-flex;
    justify-content: space-evenly;
    align-items: center;
`
const Info=styled.div`
    text-align: center;
    height: 39vw;
`
const Para=styled.p`
    width: 50vw;
    margin: 0 auto;
    height: 10vw;
    font-size: 1.5vw;
    color: white;
    text-shadow: 0 0 0.1vw white;
    margin-top: 8vw;
`
const Title=styled.h1`
    font-size: 5vw;
    margin-top: 4vw;
    color: white;
    text-shadow: 0px 2px 20vw black;
`
const UpperButton=styled.button`
    width: 17vw;
    height: 5vw;
    border-radius: .5vw;
    font-size: 2vw;
    color: white;
    background: #ffffff87;
    font-weight: 900;
    margin-top: 22vw;
    box-shadow: 0 0 7vw black;
`
const LowerButton=styled.button`
    width: 17vw;
    height: 5vw;
    margin-top: 8vw;
    border-radius: .5vw;
    font-size: 2vw;
    background: #ffffff45;
    color: white;
    box-shadow: 0 0 20vw #00000094;
`
const ButtnHolder=styled.div`
    display: inline-flex;
    width: 100vw;
    justify-content: space-evenly;
`
const TopTitle=styled.h1`
    text-align: center;
    position: absolute;
    width: 46vw;
    top: 10vw;
    font-size: 5vw;
    margin-left: 27vw;
    color: white;
    text-shadow: 0 0 3.5vw black;

`
const TopDesc=styled.h3`
    text-align: center;
    position: absolute;
    width: 35vw;
    margin-left: 32vw;
    top: 23vw;
    font-size: 1.5vw;
    text-shadow: 0 0 20vw black;
    color: white;
`
const SecDesc=styled.div`
    text-align: center;
    position: absolute;
    width: 45vw;
    top: 29vw;
    margin-left: 27.5vw;
    font-size: 1.5vw;
    text-shadow: 0 0 20vw black;
    color: white;
`
const Banner=styled.div`
    position: absolute;
    width: 100vw;
    height: 16vw;
    top: 21.5vw;
    background: #11679bb0;
    z-index: -1;
`
const Banner2=styled.div`
    position: absolute;
    width: 100vw;
    height: 14vw;
    top: 111vw;
    background: #e18f2c6b;
    z-index: -1;
`

class Home extends Component{
    render() {
        return (
            <div>
<ParallaxBanner
    layers={[
        {
            image: 'https://static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/t/5c16fb850e2e72b118614e03/1545010086750/20181026_112113.jpg?format=2500w',
            amount: 0.4,
        },
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
            image: 'https://images.unsplash.com/photo-1524499993294-a14b20e9322c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
            amount: 0.4,
        },
    ]}
    style={{
    position: 'absolute',
    width: '100vw',
    height: '50vw',
    zIndex: '-4',
    marginTop: '85vw',
    }}
></ParallaxBanner>
                <TopTitle>NOBODY PLANS TO BE HOMELESS</TopTitle>
                <TopDesc>Safe Parking LA provides a safe and legal intervention for people experiencing homelessness who are living in their vehicles.</TopDesc>
                <SecDesc>In Los Angeles County, there are over 15,700 people living in their vehicles each night. Individuals living in their cars represent over 25% of the population of people experiencing homelessness in LA County. We are here to help.</SecDesc>
            <Wrapper>
                <UpperButton>APPLY TO PARK</UpperButton>
                <UpperButton>ADDITIONAL RESOURCES</UpperButton>
                <Banner/>
            </Wrapper>
            <Testimonials/>
                <Info>
                    <div >
                        <Title>WHAT WE DO</Title>
                        <Para>Aliqua culpa esse culpa ipsum veniam nostrud dolor ea ad. Occaecat fugiat excepteur occaecat voluptate elit. Nulla culpa velit qui est elit officia anim. Id exercitation mollit consequat sunt consequat et quis dolor excepteur incididunt. Mollit ex consectetur in voluptate duis dolore amet culpa labore.</Para>
                    <Banner2/>
                    </div>
                    <ButtnHolder>
                        <LowerButton>APPLY FOR PARKING</LowerButton>
                        <LowerButton>ADDITIONAL RESOURCES</LowerButton>
                    </ButtnHolder>
                </Info>
                </div>
        )
    }
}
export default Home