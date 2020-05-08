import React from 'react';
import Home from './Home/js/Home';
import About from './About/js/About';
import { Link, Route, Switch } from 'react-router-dom';

//Home Component
const Homepage = () => <Home />;

//About Component
const Aboutpage = () => <About />;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Homepage} />
        <Route path='/about' component={Aboutpage} />
      </div>
    );
  }
}
