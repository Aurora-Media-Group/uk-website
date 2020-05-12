import React from 'react';
import Navbar from '../../Home/js/Navbar';
import Header from './Header';
import TeamContent from './TeamContent';
import '../css/team.css';
export default function Home() {
  return (
    <div id='aboutpage'>
      <div>
        <Navbar />
        <Header />
        <TeamContent />
      </div>
    </div>
  );
}
