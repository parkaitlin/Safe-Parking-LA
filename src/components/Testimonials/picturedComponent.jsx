import React,{Component} from 'react'
import styled from 'styled-components'

const Img=styled.img`
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(28% at 50% 44%);
    height: 10vw;
`

class People extends Component{
    state={
        img:["../../picture.jpg"],
        quote:[]
    }
    render() {
        return (<div>
            <div>
                <Img src={require("../../picture.jpg")} alt="HEY! WHERE'S THE ???"/>
            </div>
            <div>
                
            </div>
        </div>)
    }
}

export default People