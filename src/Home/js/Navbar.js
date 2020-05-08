import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

function Navbar() {
  return (
    <div id='navdiv'>
      <ul id='navbar'>
        <li>
          <NavLink to='/'>
            <div id='clickable' class='home'>
              HOME
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            <div id='clickable' class='about'>
              ABOUT
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/team'>
            <div id='clickable' class='team'>
              TEAM
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/work'>
            <div id='clickable' class='work'>
              WORK
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
