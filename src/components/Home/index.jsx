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
    text-shadow: 0 0 4.1vw white;
    margin-top: 3vw;
`
const Para2=styled.p`
    width: 50vw;
    margin: 0 auto;
    height: 10vw;
    font-size: 1.5vw;
    color: white;
    text-shadow: 0 0 4.1vw white;
    margin-top: -5vw;
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
    font-size: 1.5vw;
    color: white;
    background: #11679b;
    border: black;
    font-weight: 300;
    font-family: Nunito;
    margin-top: 22vw;
    box-shadow: 0 0 7vw black;
`
const LowerButton=styled.button`
    width: 17vw;
    height: 5vw;
    margin-top: 4vw;
    border-radius: .5vw;
    font-size: 1.5vw;
    font-weight: 300;
    font-family: Nunito;
    background: #11679b;
    border: none;
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
    font-family: nunito;
    top: 23vw;
    font-size: 1.4vw;
    text-shadow: 0 0 20vw black;
    color: white;
    font-weight: 300;
`
const SecDesc=styled.div`
    text-align: center;
    position: absolute;
    width: 45vw;
    font-family: nunito;
    top: 29vw;
    margin-left: 27.5vw;
    font-size: 1.4vw;
    font-weight: 300;
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
    height: 17vw;
    top: 108.5vw;
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
                    <form action="/apply"> 
                        <UpperButton>APPLY FOR PARKING</UpperButton>
                    </form>
                    <form action="/resources">
                        <UpperButton>ADDITIONAL RESOURCES</UpperButton>
                    </form>
                <Banner/>
            </Wrapper>
            <Testimonials/>
                <Info>
                    <div >
                        <Title>WHAT WE DO</Title>
                        <Para>Our mission is simple, we want to provide safe parking options for people experiencing homelessness in their vehicles across Los Angeles.</Para>
                        <Para2>Founded in 2016, Safe Parking LA is a coordinating organization which assists homeless families and individuals living in their vehicles. We support the implementation of "Safe Parking Lots", which provide individuals a safe place to park each night, restroom access, a security guard, and social service resources.
                                We also offer additional resources to help get you back into a home.
                        </Para2>

                    <Banner2/>
                    </div>
                    <ButtnHolder>
                        <form action="/apply"> 
                            <LowerButton>APPLY FOR PARKING</LowerButton>
                        </form>
                        <form action="/resources">
                            <LowerButton>ADDITIONAL RESOURCES</LowerButton>
                        </form>
                    </ButtnHolder>
                </Info>
                </div>
        )
    }
}
export default Home