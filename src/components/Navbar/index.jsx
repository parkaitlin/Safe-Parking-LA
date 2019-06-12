import React,{Component} from 'react'

class NavBar extends Component{
    render() {
        return(
        <div>
                <a href='home'>Home</a>
                <a href='about'>About Safe Parking</a>
                <a href='apply'>Apply</a>
                <a href='resources'>Resources</a>
        </div>)
    }
}

export default NavBar