import React from 'react';
import Navbar from './Navbar';
import { ReactComponent as Discord } from './images/dc.svg';
import { ReactComponent as YouTube } from './images/yt.svg';
import { ReactComponent as Instagram } from './images/ig.svg';
import { ReactComponent as Twitter } from './images/t.svg';
import { ReactComponent as Facebook } from './images/fb.svg';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      defaultbg: true,
    };
  }

  componentDidMount() {
    document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.26)';
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
          <div id='header'>AURORA</div>
          <div id='bottom-header'>MEDIA GROUP</div>
          <div id='social'>
            <a href='#'>
              <Discord />
            </a>
            <a href='#'>
              <Instagram />
            </a>
            <a href='#'>
              <Twitter />
            </a>
            <a href='#'>
              <Facebook />
            </a>
            <a href='#'>
              <YouTube />
            </a>
          </div>
          <div id='clickable1'>
            <div
              id='clickable2'
              onClick={(event) => {
                document.body.style.background = "url('https://www.auroramediagroup.co.uk/static/media/bg.37c17300.png')";
                event.target.style.background = 'rgba(255, 255, 255, 0.26)';
                document.getElementById('clickable3').style.background = 'rgba(255, 255, 255, 0.14)';
                document.getElementById('clickable4').style.background = 'rgba(255, 255, 255, 0.14)';
                document.getElementById('clickable5').style.background = 'rgba(255, 255, 255, 0.14)';
              }}
            ></div>
            <div
              id='clickable3'
              onClick={(event) => {
                document.body.style.background = "url('https://www.imagedost.com/images/4e6ysk1hgvtqp4ff25q.jpg')";
                event.target.style.background = 'rgba(255, 255, 255, 0.26)';
                document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.14)';
                document.getElementById('clickable4').style.background = 'rgba(255, 255, 255, 0.14)';
                document.getElementById('clickable5').style.background = 'rgba(255, 255, 255, 0.14)';
              }}
            ></div>
            <div
              id='clickable4'
              onClick={(event) => {
                document.body.style.background = "url('https://www.imagedost.com/images/txp4lrchv7e7x944fpnp.jpg')";
                event.target.style.background = 'rgba(255, 255, 255, 0.26)';
                document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.14)';
                document.getElementById('clickable3').style.background = 'rgba(255, 255, 255, 0.14)';
                document.getElementById('clickable5').style.background = 'rgba(255, 255, 255, 0.14)';
              }}
            ></div>
            <div
              id='clickable5'
              onClick={(event) => {
                document.body.style.background = "url('https://www.imagedost.com/images/i3xqyxbwy21e3ibjw.jpg')";
                event.target.style.background = 'rgba(255, 255, 255, 0.26)';
                document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.14)';
                document.getElementById('clickable3').style.background = 'rgba(255, 255, 255, 0.14)';
                document.getElementById('clickable4').style.background = 'rgba(255, 255, 255, 0.14)';
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
