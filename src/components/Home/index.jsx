import React,{Component} from 'react'
import Testimonials from '../Testimonials'
import styled from 'styled-components'

const Wrapper=styled.div`
    width: 100vw;
    height: 33vw;
    background: #1717c759;
    display: inline-flex;
    justify-content: space-around;
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
    font-family: auto;
`
const LowerButton=styled.button`
    width: 17vw;
    height: 5vw;
    border-radius: .5vw;
    font-size: 2vw;
    font-family: auto;
`
const ButtnHolder=styled.div`
    display: inline-flex;
    width: 100vw;
    justify-content: space-around;
`
class Home extends Component{
    render() {
        return (
        <div>
            <Wrapper>
                <UpperButton>Apply to Park</UpperButton>
                <UpperButton>Addional Resources</UpperButton>
            </Wrapper>
            <Testimonials/>
                <Info>
                    <div>
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