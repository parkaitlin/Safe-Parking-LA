import React,{Component} from 'react'
import * as routes from '../constants/routes'
import styled from 'styled-components'
import call from '../../call.png'

const Wrapper=styled.div`
    width: 100vw;
    height: 6vw;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #134b80a3;
    margin-top: 0vw;
    -webkit-text-decoration: none;
    text-decoration: none;
`
const Link=styled.a`
    padding-left: 1vw;
    text-decoration:none;
    color: white;
    &:hover{
        color: yellow;
        transition: .5s;
    }
`
const Logo=styled.div`
    padding-left: 0vw;
    height: 3.8vw;
    width: 16vw;
    position: absolute;
    margin-left: -82vw;
    -webkit-text-decoration: none;
    text-decoration: none;
    margin-top: 1vw;
    background-size: contain;
    background-image: url('https://static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/t/5c0f1cdb4ae2379685e87b3d/1544494308809/safeparkingla_logo.png?format=1500w')
`
const Call=styled.div`
    padding-left: 3vw;
    margin-right: 3vw;
    text-decoration:none;
`
const Ring=styled.img`
    width: 4.5vw;
    margin-top: 2vw;
    filter: sepia(100%) contrast(100%) saturate(10000%) hue-rotate(1deg);
`

class NavBar extends Component{
    render() {
        return(
        <Wrapper>
                <Logo/>
                <Link href='home'>Home</Link>
                <Link href='about'>About Safe Parking</Link>
                <Link href='apply'>Apply</Link>
                <Link href={routes.HOME}>OUR MAIN PAGE</Link>
                <Link href={routes.RESOURCE}>Resources</Link>
                <Call><Ring src={call}/></Call>
        </Wrapper>)
    }
}

export default NavBar