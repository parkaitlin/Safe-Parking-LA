import React,{Component} from 'react'
import styled from 'styled-components'



const Img=styled.img`
    clip-path: circle(28% at 58% 43%);
    height: 18vw;
    margin-top: 3.5vw;
    margin-left: -7vw;
`
const Quoth=styled.div`
    position: absolute;
    height: 5vw;
    text-align: center;
    margin-top: 10.5vw;
    margin-left: -0.5vw;
    justify-content: center;
    filter: drop-shadow(0vw 0vw 1vw #0000003d);
`
const Pic0 = styled.div`
    display: flex;
    width: 18vw;
    align-items: center;
`
const Pic1 = styled.div`
    display: flex;
    width: 18vw;
    align-items: center;
`
const Pic2 = styled.div`
    display: flex;
    width: 18vw;
    align-items: center;
`
const Wrapper = styled.div`
    overflow-wrap: break-word;
    display: inline-flex;
    margin-top: -4vw;
    width: 100vw;
    height: 40vw;
    justify-content: space-evenly;
`
const Indiv = styled.div`
    display: flex;
    justify-content: center;
    filter: drop-shadow(0vw 0vw 0.1vw black);
`
const Para = styled.p`
font-size: 1.2vw;
    border-radius: 1vw;
    width: 18vw;
    -webkit-filter: drop-shadow(0vw 0vw 1vw #000000);
    filter: drop-shadow(0vw 0vw 1vw white);
    color: #000000;
    text-shadow: 0 0 12vw white;
`
const Background=styled.div`
    width: 100vw;
    position: absolute;
    height: 40vw;
    margin-top: 0vw;
    overflow: hidden;
    background: white;
    border-top: solid #0b0c0e3d .4vw;
    border-bottom: solid #ffa5003d .4vw;
    filter: blur(1px);
`
const Title = styled.h1`
    position: absolute;
    margin-top: 4vw;
    color: #11679b;
    font-size: 5vw;
`
class People extends Component{

    render() {
        return (
            <Wrapper>
                <Background />
                <Title>WHO WE HELP</Title>
            <Pic0>
                <Indiv>
                    <Img src={require('../../picture0.jpg')} alt="HEY! WHERE'S THE PICC???"/>
                </Indiv>
                <Quoth>
                    <Para>"MJ is a veteran: “Without Safe Parking LA, MJ might be one of the 35,000 people literally living on the streets and sidewalks and alleys of LA.”"</Para>
                </Quoth>
            </Pic0>
            <Pic1>
                <Indiv>
                    <Img src={require('../../picture1.jpg')} alt="HEY! WHERE'S THE PICC???"/>
                </Indiv>
                <Quoth>
                    <Para>"Mindy, a cosmetologist, barber, and esthetician impacted by the economic downturn: “Despite these obstacles, Mindy has continued to persevere and reach out to social service organizations for help.”"</Para>
                </Quoth>
            </Pic1>
            <Pic2>
                <Indiv>
                    <Img src={require('../../picture2.jpg')} alt="HEY! WHERE'S THE PICC???"/>
                </Indiv>
                <Quoth>
                    <Para>"Michelle, a dog trainer and native Angeleno: “Since coming to Safe Parking LA, Michelle has had a safe place to sleep at night, guarded by a security guard and access to a restroom and electrical outlets. ”"</Para>
                </Quoth>
            </Pic2>
        </Wrapper>)
    }
}

export default People