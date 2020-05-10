import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

function Navbar() {
  return (
    <div id='navdiv'>
      <ul id='navbar'>
        <li>
          <NavLink to='/'>
            <div id='clickable' className='home'>
              HOME
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            <div
              id='clickable'
              className='about'
              onClick={() => {
                document.body.style.background = 'white';
              }}
            >
              ABOUT
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/team'>
            <div id='clickable' className='team'>
              TEAM
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to='/work'>
            <div id='clickable' className='work'>
              WORK
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
