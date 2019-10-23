import React, { useState } from 'react'
import * as routes from '../constants/routes'
import call from '../../../src/assets/img/call.png'

import { Wrapper, Link, LogoWrap, Logo, Call, Ring, PhoneNumber } from './style'

const NavBar = () => {
  const [visibility, setVisibility] = useState('hidden')
  const showModal = () => {
    setVisibility('visible')
  }
  const hideModal = () => {
    setVisibility('hidden')
  }
  return (
    <Wrapper>
      <PhoneNumber style={{ visibility }}>
        <div>(213) 793 - 8493</div>
      </PhoneNumber>
      <LogoWrap href='/'>
        <Logo />
      </LogoWrap>
      <Link href='https://www.safeparkingla.org/about'>About</Link>
      <Link href={routes.APPLYFORPARKING}>Apply to Park</Link>
      <Link href={routes.RESOURCE}>Resources</Link>
      <Link href='https://www.safeparkingla.org/contact'>Contact</Link>
      <Call className='phone' onMouseEnter={showModal} onMouseLeave={hideModal}>
        <Ring src={call} />
      </Call>
    </Wrapper>
  )
}
export default NavBar
