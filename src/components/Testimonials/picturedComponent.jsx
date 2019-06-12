import React,{Component} from 'react'
import styled from 'styled-components'
import background from '../../background1.jpg'



const Img=styled.img`
    -webkit-clip-path: circle(28% at 60% 43%);
    clip-path: circle(28% at 60% 43%);
    height: 10vw;
    margin-top: -6vw;
`
const Quoth=styled.div`
    position: absolute;
    height: 5vw;
    text-align: center;
    margin-top: 2vw;
    margin-left: -0.5vw;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    filter: drop-shadow(0vw 0vw 1vw #00000075);
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
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: -ms-inline-flexbox;
    display: inline-flex;
    width: 100vw;
    height: 17vw;
    -webkit-box-pack: space-evenly;
    -webkit-justify-content: space-evenly;
    -ms-flex-pack: space-evenly;
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
    filter: drop-shadow(0vw 0vw 1vw #444444);
    color: #abc0ff;
`
const Background = styled.div`
    background-image: url(/static/media/background1.43d255c5.jpg);
    width: 100vw;
    position: absolute;
    height: 13vw;
    background-size: cover;
    background-position: right;
    border-top: solid #ffffff8c 1vw;
    border-bottom: solid #ffffff8c 1vw;
    -webkit-filter: blur(1px);
    filter: blur(1px);
`
class People extends Component{

    render() {
        return (
        <Wrapper>
        <Background style={{backgroundImage: `url(${background})`}}/>
            <Pic0>
                <Indiv>
                    <Img src={require('../../picture0.jpg')} alt="HEY! WHERE'S THE PICC???"/>
                </Indiv>
                <Quoth>
                    <Para>"Hey Here is a quote, it was a nice stay and it helped me get on my feet. Thank you!"</Para>
                </Quoth>
            </Pic0>
            <Pic1>
                <Indiv>
                    <Img src={require('../../picture1.jpg')} alt="HEY! WHERE'S THE PICC???"/>
                </Indiv>
                <Quoth>
                    <Para>"Oh here's another one!"</Para>
                </Quoth>
            </Pic1>
            <Pic2>
                <Indiv>
                    <Img src={require('../../picture2.jpg')} alt="HEY! WHERE'S THE PICC???"/>
                </Indiv>
                <Quoth>
                    <Para>"Quotes again, quotes everywhere!"</Para>
                </Quoth>
            </Pic2>
        </Wrapper>)
    }
}

export default People