import React from 'react';
import Home from './Home/js/Home';
import About from './About/js/About';
import Team from './Team/js/Team';
import { Link, Route, Switch } from 'react-router-dom';

//Home Component
const Homepage = () => <Home />;

//About Component
const Aboutpage = () => <About />;

//About Component
const Teampage = () => <Team />;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={Aboutpage} />
          <Route exact path='/team' component={Teampage} />
        </Switch>
      </div>
    );
  }
}
