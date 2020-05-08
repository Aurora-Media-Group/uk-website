import React from 'react';
import Background from './Background';
import Navbar from './Navbar';
import Header from './Header';
import Socials from './Socials';

import '../css/home.css';

export default function Home() {
  return (
    <div id='homepage'>
      <div>
        <Background />
        <Navbar />
        <Header />
        <Socials />
      </div>
    </div>
  );
}
