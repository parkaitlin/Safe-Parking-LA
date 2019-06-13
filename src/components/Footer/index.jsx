import React,{Component} from 'react'
import styled from 'styled-components'

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagram, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    height: 11vw;
    width: 100vw;
    height: 12vw;
    width: 100vw;
    background: #11679b;
    display: inline-flex;
    justify-content: space-between;
    text-align: center;

.sm-links {
        color: white;
        font-size: 3vw;
        margin: 1vw;
    }
`
const Emerg=styled.div`
    color: white;
    padding-left: 3vw;
    width: 28vw;
    text-align: left;
`
const Social=styled.div`
    color:white;
    width: 28vw;
`
const Contact=styled.div`
    color: white;
    padding-right: 3vw;
    width: 28vw;
    text-align:right;
`
const Title=styled.h1`
    font-size: 1vw;
    font-weight: 900;
    margin-top: 1vw;
`
const Para =styled.p`
    font-size: 1vw;
    margin-top: 1vw;
`
const Para2 =styled.p`
    font-size: 1vw;
    margin-top: 1vw;
    text-align: left;
    margin-left: 17vw;
`
const Num=styled.span`
    font-weight: 900;
    color: yellow;
`
const Link=styled.a`
    text-decoration: none;
    font-weight: 900;
    color: #f7ff00;
    text-align: unset;
`

class Footer extends Component{
    render() {
        return (
        <Wrapper>
                <Emerg>
                    <Title>EMERGENCY CONTACT</Title>
                    <Para>Emergency Response: <Num>911</Num></Para>
                    <Para>Health and Community Services: <Num>211</Num></Para>
                    <Para>National Suicide Prevention Lifeline: <Num>1-800-273-8255</Num></Para>
                    <Para>PATH Program: <Num>323-644-2200</Num></Para>
                </Emerg>
                <Social><Title>SOCIAL NETWORKS</Title>
                    <div>
                        <a href="https://www.facebook.com/SafeParkingLA/" target='_blank' ><FontAwesomeIcon icon={faFacebookSquare} className="sm-links"/></a>
                        <a href="https://www.instagram.com/safeparking_la/" target='_blank' ><FontAwesomeIcon icon={faInstagram} className="sm-links"/></a>
                        <a href="mailto:info@safeparkingla.org" target='_blank' ><FontAwesomeIcon icon={faEnvelope} className="sm-links"/></a>
                    </div>
                </Social>
                <Contact><Title>EXTERNAL LINKS</Title>
                    <Para2><Link href='https://www.samhsa.gov/homelessness-programs-resources'>SAMHSA.gov</Link></Para2>
                    <Para2><Link href='https://www.lahsa.org/get-help'>LAHSA.org</Link></Para2>
                    <Para2><Link href='https://www.socialserve.com/la_county/Resources.html?ch=LAC'>SocialServe.com</Link></Para2>
                    <Para2><Link href='https://www.hhs.gov/programs/social-services/homelessness/resources/index.html#ResourcesforPersonsExperiencingHomelessness'>HHS.gov</Link></Para2>
                </Contact>
        </Wrapper>)
    }
}

export default Footer