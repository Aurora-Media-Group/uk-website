import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

function Navbar() {
  return (
    <div id='navdiv'>
      <ul id='navbar'>
        <li>
          <Link to='/'>
            <div id='clickable' class='home'>
              HOME
            </div>
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <div id='clickable' class='about'>
              ABOUT
            </div>
          </Link>
        </li>
        <li>
          <a href='#'>
            <div id='clickable' class='team'>
              TEAM
            </div>
          </a>
        </li>
        <li>
          <a href='#'>
            <div id='clickable' class='work'>
              WORK
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
