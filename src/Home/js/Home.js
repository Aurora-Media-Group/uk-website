import React from 'react';
import Background from './Background';
import Navbar from './Navbar';
import Header from './Header';
import Socials from './Socials';

export default function Home() {
  return (
    <div>
      <div>
        <Background />
        <Navbar />
        <Header />
        <Socials />
      </div>
    </div>
  );
}
