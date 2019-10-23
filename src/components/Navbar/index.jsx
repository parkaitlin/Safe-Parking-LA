import React from 'react'
import * as routes from '../constants/routes'

import { Wrapper, Link, LogoWrap, Logo } from './style'

const NavBar = () => {
  return (
    <Wrapper>
      <LogoWrap href='/'>
        <Logo />
      </LogoWrap>
      <Link href='https://www.safeparkingla.org/about'>About</Link>
      <Link href={routes.APPLYFORPARKING}>Apply to Park</Link>
      <Link href={routes.RESOURCE}>Resources</Link>
      <Link href='https://www.safeparkingla.org/contact'>Contact</Link>
    </Wrapper>
  )
}
export default NavBar
