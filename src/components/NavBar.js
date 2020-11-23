import React, { Component } from 'react';
import {Link} from 'react-router-dom'

const NavBar = (props) => {
  return ( 
    <div>
<ul>
  <li>
    <Link to = '/'>Home</Link>
  </li>
</ul>
    </div>
   );
}
 
export default NavBar;