import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebookSquare
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import {
  Wrapper,
  Emerg,
  Social,
  Contact,
  Title,
  Para,
  Para2,
  Num,
  Link
} from './style'

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <Emerg>
          <Title>EMERGENCY CONTACT</Title>
          <Para>
            Emergency Response: <Num>911</Num>
          </Para>
          <Para>
            Health and Community Services: <Num>211</Num>
          </Para>
          <Para>
            National Suicide Prevention Lifeline: <Num>1-800-273-8255</Num>
          </Para>
          <Para>
            PATH Program: <Num>323-644-2200</Num>
          </Para>
        </Emerg>
        <Social>
          <Title>SOCIAL NETWORKS</Title>
          <div>
            <a
              rel='noopener noreferrer'
              href='https://www.facebook.com/SafeParkingLA/'
              target='_blank'
            >
              <FontAwesomeIcon icon={faFacebookSquare} className='sm-links' />
            </a>
            <a
              rel='noopener noreferrer'
              href='https://www.instagram.com/safeparking_la/'
              target='_blank'
            >
              <FontAwesomeIcon icon={faInstagram} className='sm-links' />
            </a>
            <a
              rel='noopener noreferrer'
              href='mailto:info@safeparkingla.org'
              target='_blank'
            >
              <FontAwesomeIcon icon={faEnvelope} className='sm-links' />
            </a>
          </div>
        </Social>
        <Contact>
          <Title>EXTERNAL LINKS</Title>
          <Para2>
            <Link href='https://www.samhsa.gov/homelessness-programs-resources'>
              SAMHSA.gov
            </Link>
          </Para2>
          <Para2>
            <Link href='https://www.lahsa.org/get-help'>LAHSA.org</Link>
          </Para2>
          <Para2>
            <Link href='https://www.socialserve.com/la_county/Resources.html?ch=LAC'>
              SocialServe.com
            </Link>
          </Para2>
          <Para2>
            <Link href='https://www.hhs.gov/programs/social-services/homelessness/resources/index.html#ResourcesforPersonsExperiencingHomelessness'>
              HHS.gov
            </Link>
          </Para2>
        </Contact>
      </Wrapper>
    )
  }
}

export default Footer
