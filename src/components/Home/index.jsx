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
    height: 39vw;

`
const Para=styled.p`
    width: 30vw;
    margin: 0 auto;
    height: 10vw;
    font-size: 1vw;
    color: white;
    text-shadow: 0 0 0.1vw white;
`
const Title=styled.h1`
    font-size: 7vw;
    margin-top: 3vw;
    font-style: italic;
    color: white;
    text-shadow: 0px 2px 20vw black;
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
    top: 13vw;
    font-size: 4vw;
    color: white;
    font-style: italic;
    border-bottom: solid 9px;
    text-shadow: 0 0 11.5vw black;
`
const TopDesc=styled.h3`
    text-align: center;
    position: absolute;
    width: 100vw;
    top: 21vw;
    font-size: 2vw;
    text-shadow: 0 0 20vw black;
    color: white;
`
const Toggi=styled.div`
    position: absolute;
    width: 21vw;
    height: 4vw;
    background: #0000ff96;
    left: 26vw;
    top: 23vw;
    border-radius: 1vw;
    }
.on{
    display: relative;
}
.off{
    display: none;
}
`


class Home extends Component{
    state={
        class:'on'
    }
    call=() => {
        this.setState({class: 'on'})
    }
    hangup=() => {
        this.setState({class:'off'})
    }
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
    height: '39vw',
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
    height: '5000px',
    position: 'absolute',
    overflow: 'hidden',
    width: '100vw',
    height: '56vw',
    zIndex: '-4',
    marginTop: '50vw'
    }}
></ParallaxBanner>
                <TopTitle>NOBODY PLANS TO BE HOMELESS</TopTitle>
                <TopDesc><span onClick={this.call} style={{color: 'yellow'}}>Call</span> us now to start the process</TopDesc>
                <Toggi>914-213-1355</Toggi>
            <Wrapper>
                <UpperButton>Apply to Park</UpperButton>
                <UpperButton>Additional Resources</UpperButton>
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