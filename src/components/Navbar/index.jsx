import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import * as routes from '../constants/routes'

class NavBar extends Component{
    render() {
        return(
        <div>
                <a href='home'>Home</a>
                <a href='about'>About Safe Parking</a>
                <a href='apply'>Apply</a>
                <NavLink to={routes.HOME}>(OUR MAIN PAGE)</NavLink>
                <NavLink to={routes.RESOURCE}>Resources</NavLink>
        </div>)
    }
}

export default NavBar