import React from 'react';
import Navbar from '../../Home/js/Navbar';
import Header from './Header';
import Content from './AboutContent';
import '../css/about.css';
export default function Home() {
  return (
    <div id='aboutpage'>
      <div>
        <Navbar />
        <Header />
        <Content />
      </div>
    </div>
  );
}
