import React, { Component } from 'react';

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.26)';
  }

  render() {
    return (
      <div>
        <div id='clickable1'>
          <div
            id='clickable2'
            onClick={(event) => {
              document.getElementById('homepage').style.background =
                "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/bg1.png')";
              event.target.style.background = 'rgba(255, 255, 255, 0.26)';
              document.getElementById('clickable3').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable4').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable5').style.background = 'rgba(255, 255, 255, 0.14)';
            }}
          ></div>
          <div
            id='clickable3'
            onClick={(event) => {
              document.getElementById('homepage').style.background =
                "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/bg3.jpg')";
              event.target.style.background = 'rgba(255, 255, 255, 0.26)';
              document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable4').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable5').style.background = 'rgba(255, 255, 255, 0.14)';
            }}
          ></div>
          <div
            id='clickable4'
            onClick={(event) => {
              document.getElementById('homepage').style.background =
                "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/bg6.jpg')";
              event.target.style.background = 'rgba(255, 255, 255, 0.26)';
              document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable3').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable5').style.background = 'rgba(255, 255, 255, 0.14)';
            }}
          ></div>
          <div
            id='clickable5'
            onClick={(event) => {
              document.getElementById('homepage').style.background =
                "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/bg5.jpg')";
              event.target.style.background = 'rgba(255, 255, 255, 0.26)';
              document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable3').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable4').style.background = 'rgba(255, 255, 255, 0.14)';
            }}
          ></div>
        </div>
      </div>
    );
  }
}
