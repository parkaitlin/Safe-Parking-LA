import React from 'react';
import {NavLink} from 'react-router-dom';
import * as routes from '../constants/routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSun} from '@fortawesome/free-regular-svg-icons';

const Navbar = (props) => {
  return(
    <NavLink to={routes.HOME} className="navbar-link">Home</NavLink>

  )
}
