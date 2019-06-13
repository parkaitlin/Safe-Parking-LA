import React,{Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 12vw;
    width: 100vw;
    height: 12vw;
    width: 100vw;
    background: #020048;
    display: inline-flex;
    justify-content: space-between;
`
const Emerg=styled.div`
    color: white;
    padding-left: 3vw;
`
const Social=styled.div`
    color:white;
`
const Contact=styled.div`
    color: white;
    padding-right: 3vw;
`
const Title=styled.h1`
    font-size: 1vw;
    font-weight: 900;
`
const Para =styled.p`
    font-size: 1vw;
`

class Footer extends Component{
    render() {
        return (
        <Wrapper>
                <Emerg><Title>EMERGENCY CONTACT</Title>
                    <Para>Emergency Response:</Para>
                    <Para>911</Para>
                    <Para>Health and Community Services</Para>
                    <Para>211</Para>
                    <Para>National Suicide Prevention Lifeline</Para>
                    <Para> 1-800-273-8255</Para>
                    <Para>PATH Program</Para>
                    <Para>(323) 644-2200</Para>
                </Emerg>
                <Social><Title>SOCIAL NETWORKS</Title>
                    <Para></Para>
                </Social>
                <Contact><Title>EXTERNAL LINKS</Title>
                    <Para></Para>
                </Contact>
        </Wrapper>)
    }
}

export default Footer