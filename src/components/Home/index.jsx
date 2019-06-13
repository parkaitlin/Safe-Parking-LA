import React,{Component} from 'react'
import Testimonials from '../Testimonials'
import styled from 'styled-components'
import {ParallaxBanner} from 'react-scroll-parallax'

const Wrapper=styled.div`
width: 100vw;
    height: 56vw;
    background: #134b80a3;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    -webkit-box-pack: space-around;
    -webkit-justify-content: space-around;
    -ms-flex-pack: space-around;
    justify-content: space-around;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`
const Info=styled.div`
    text-align: center;
    height: 36vw;

`
const Para=styled.p`
    width: 30vw;
    margin: 0 auto;
    height: 10vw;
`
const Title=styled.h1`
    font-size: 7vw;
`
const UpperButton=styled.button`
    width: 17vw;
    height: 5vw;
    border-radius: .5vw;
    font-size: 2vw;
    color: black;
    font-weight: 900;
    font-style: italic;
`
const LowerButton=styled.button`
    width: 17vw;
    height: 5vw;
    border-radius: .5vw;
    font-size: 2vw;
`
const ButtnHolder=styled.div`
    display: inline-flex;
    width: 100vw;
    justify-content: space-around;
`
const TopTitle=styled.h1`
    text-align: center;
    position: absolute;
    width: 100vw;
    top: 9vw;
    font-size: 5vw;
    color: white;
    font-style: italic;
    border-bottom: solid 9px;
`
const TopDesc=styled.h3`
    text-align: center;
    position: absolute;
    width: 100vw;
    top: 19vw;
    font-size: 2vw;
    color:white;
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
    overflow: 'hidden',
    width: '100vw',
    height: '55vw',
    zIndex: '-4',
    marginTop: '-6vw',
    marginBottom: '5vw'
    }}
>
    <h1>No One Plans To Be Homeless</h1>
</ParallaxBanner>
<ParallaxBanner
    layers={[
        {
            image: 'https://images.unsplash.com/photo-1524499993294-a14b20e9322c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
            amount: 0.4,
        },
    ]}
    style={{
    height: '5000px',
    position: 'absolute',
    overflow: 'hidden',
    width: '100vw',
    height: '56vw',
    zIndex: '-4',
    marginTop: '50vw'
    }}
></ParallaxBanner>
                <TopTitle>No One Plans to be Homeless</TopTitle>
                <TopDesc><span style={{color:'yellow'}}>Call</span> us now to start the process</TopDesc>
            <Wrapper>
                <UpperButton>Apply to Park</UpperButton>
                <UpperButton>Addional Resources</UpperButton>
            </Wrapper>
            <Testimonials/>
                <Info>
                    <div >
                        <Title>What we do</Title>
                        <Para>Aliqua culpa esse culpa ipsum veniam nostrud dolor ea ad. Occaecat fugiat excepteur occaecat voluptate elit. Nulla culpa velit qui est elit officia anim. Id exercitation mollit consequat sunt consequat et quis dolor excepteur incididunt. Mollit ex consectetur in voluptate duis dolore amet culpa labore.</Para>
                    </div>
                    <ButtnHolder>
                        <LowerButton>Apply for Parking</LowerButton>
                        <LowerButton>Additional Resources</LowerButton>
                    </ButtnHolder>
                </Info>
        </div>)
    }
}
export default Home