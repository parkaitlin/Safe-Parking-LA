import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import * as routes from '../constants/routes'
import styled from 'styled-components'

const Wrapper=styled.div`
    width: 100vw;
    height: 4vw;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
`
const Link=styled.a`
    padding-left: 1vw;
`
const Logo=styled.div`
    padding-left: 1vw;
    position: absolute;
    margin-left: -90vw;
`
const MainPage=styled.div`
    padding-left: 1vw;
`
const Resources=styled.div`
    padding-left: 1vw;
`
const Call=styled.div`
    padding-left: 4vw;
    margin-right: 3vw;
`

class NavBar extends Component{
    render() {
        return(
        <Wrapper>
                <Logo>LOGO</Logo>
                <Link href='home'>Home</Link>
                <Link href='about'>About Safe Parking</Link>
                <Link href='apply'>Apply</Link>
                <MainPage><NavLink to={routes.HOME}>OUR MAIN PAGE</NavLink></MainPage>
                <Resources><NavLink to={routes.RESOURCE}>Resources</NavLink></Resources>
                <Call>CALL</Call>
        </Wrapper>)
    }
}

export default NavBar