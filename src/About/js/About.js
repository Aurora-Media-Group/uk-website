import React from 'react';
import Navbar from '../../Home/js/Navbar';
import Content from './AboutContent';
import '../css/about.css';
export default function Home() {
  return (
    <div id='aboutpage'>
      <div>
        <Navbar />
        <Content />
      </div>
    </div>
  );
}
