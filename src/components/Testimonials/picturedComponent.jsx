import React,{Component} from 'react'
import styled from 'styled-components'
import {img, quotes} from '../../images'



const Img=styled.img`
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(28% at 50% 44%);
    height: 10vw;
`
const Quoth=styled.div`
    display: flex;
    height: 5vw;
    width: 13vw;
    margin-top: -1.5vw;
    margin-left: 2vw;
`

class People extends Component{
    newPic=() => {
        for(let i=0;i<img.length;i++){
            return <div>
                <Img src={'../../picture'+ img[i] + '.jpg'} alt="HEY! WHERE'S THE PICC???"/>
            </div>
        }
    }
    render() {
        return (<div>
            
            <Quoth>
                {quotes[0]}
            </Quoth>
        </div>)
    }
}

export default People