import React,{Component} from 'react'
import styled from 'styled-components'



const Img=styled.img`
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(28% at 50% 44%);
    height: 10vw;
`
const Quoth=styled.div`
    display: flex;
    height: 5vw;
    margin-top: -1.5vw;
    justify-content: center;
`
const Pic0 = styled.div`
width:18vw;
`
const Pic1 = styled.div`
width:18vw;
`
const Pic2 = styled.div`
width:18vw;
`
const Wrapper = styled.div`
    display: inline-flex;
    width: 100vw;
    justify-content: space-evenly;
`
const Indiv = styled.div`
    display: flex;
    justify-content: center;
`
class People extends Component{

    render() {
        return (
        <Wrapper>
            <Pic0>
                <Indiv>
                    <Img src={require('../../picture0.jpg')} alt="HEY! WHERE'S THE PICC???"/>
                </Indiv>
                <Quoth>
                    "Hey Here is a quote"
                </Quoth>
            </Pic0>
            <Pic1>
                <Indiv>
                    <Img src={require('../../picture1.jpg')} alt="HEY! WHERE'S THE PICC???"/>
                </Indiv>
                <Quoth>
                    "Oh here's another one!"
                </Quoth>
            </Pic1>
            <Pic2>
                <Indiv>
                    <Img src={require('../../picture2.jpg')} alt="HEY! WHERE'S THE PICC???"/>
                </Indiv>
                <Quoth>
                    "Quotes again, quotes everywhere!"
                </Quoth>
            </Pic2>
        </Wrapper>)
    }
}

export default People