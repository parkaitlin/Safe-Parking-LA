import React,{Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 12vw;
    width: 100vw;
    height: 12vw;
    width: 100vw;
    background: #020048;
    display: inline-flex;
    justify-content: space-between;
`
const Emerg=styled.div`
    color: white;
    padding-left: 3vw;
`
const Social=styled.div`
color:white;
`
const Contact=styled.div`
    color: white;
    padding-right: 3vw;
`

class Footer extends Component{
    render() {
        return (
        <Wrapper>
                <Emerg><h1>EMERGENCY CONTACT</h1>
                    <p>Emergency Response:</p>
                    <p>911</p>
                    <p>Health and Community Services</p>
                    <p>211</p>
                    <p>National Suicide Prevention Lifeline</p>
                    <p> 1-800-273-8255</p>
                    <p>PATH Program</p>
                    <p>(323) 644-2200</p>
                </Emerg>
                <Social><h1>SOCIAL NETWORKS</h1>
                    <p></p>
                </Social>
                <Contact><h1>EXTERNAL LINKS</h1>
                    <p></p>
                </Contact>
        </Wrapper>)
    }
}

export default Footer