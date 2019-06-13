import React, { Component, useState } from 'react'
import * as routes from '../constants/routes'
import styled from 'styled-components'
import call from '../../call.png'
import { anyTypeAnnotation } from '@babel/types';

const Wrapper = styled.div`
    width: 100vw;
    height: 5vw;
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
    background: white;
    margin-top: 0vw;
    -webkit-text-decoration: none;
    text-decoration: none;
    .phone {
        > div {
            color: white;
            background-color: black;
            height: 50px;
            position: absolute;
            left: 74%;
            font-size: 2em;
            width: 220px;
            font-weight: 900;
            border-radius: 4px;
        }
    }
`
const Link = styled.a`
    padding-left: 1vw;
    text-decoration:none;
    font-size: 1vw;
    color: black;
    &:hover{
        color: blue;
        transition: .5s;
    }
`
const LogoWrap = styled.a`
    padding-left: 0vw;
    height: 3.8vw;
    width: 16vw;
    position: absolute;
    margin-left: -82vw;
`
const Logo = styled.div`
    height: 3.8vw;
    width: 16vw;
    -webkit-text-decoration: none;
    text-decoration: none;
    background-repeat:no-repeat;
    background-size: contain;
    background-image: url('https://static1.squarespace.com/static/582dc9ea6a4963e5091cd8cd/t/5c0f1cdb4ae2379685e87b3d/1544494308809/safeparkingla_logo.png?format=1500w');
`
const Call = styled.div`
    padding-left: 3vw;
    margin-right: 3vw;
    text-decoration:none;
`
const Ring = styled.img`
    width: 3.5vw;
    filter: sepia(100%) contrast(100%) saturate(10000%) hue-rotate(-50deg) brightness(.86);
`

const NavBar = () => {
    const [display, setDisplay] = useState('none')
    const showModal = () => {
        setDisplay('block')
    }
    const hideModal = () => {
        setDisplay('none')
    }
    return (
        <Wrapper>
            <LogoWrap href='/'><Logo /></LogoWrap>
            <Link href='https://www.safeparkingla.org/about'>About</Link>
            <Link href={routes.APPLYFORPARKING}>Apply to Park</Link>
            <Link href={routes.RESOURCE}>Resources</Link>
            <Link href='https://www.safeparkingla.org/contact'>Contact</Link>
            <Call
                className="phone"
                onMouseEnter={showModal}
                onMouseLeave={hideModal}
                >
                <Ring src={call} />
                <div style={{ display }}>
                    (213) 793 - 8493
                </div>
            </Call>
        </Wrapper>)
}
export default NavBar