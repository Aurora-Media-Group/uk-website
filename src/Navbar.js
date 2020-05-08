import React from 'react';

function Navbar() {
  return (
    <div id='navdiv'>
      <ul id='navbar'>
        <li>
          <a href='#'>
            <div id='clickable' class='home'>
              HOME
            </div>
          </a>
        </li>
        <li>
          <a href='#'>
            <div id='clickable' class='about'>
              ABOUT
            </div>
          </a>
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
