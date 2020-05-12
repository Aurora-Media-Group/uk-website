import React, { Component } from 'react';

export default class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultBackground: "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/fh4.jpg') no-repeat",
      currentBackground: "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/fh4.jpg') no-repeat",
    };
  }

  componentDidMount() {
    document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.26)';
    document.body.style.background = this.state.currentBackground;
  }

  render() {
    return (
      <div>
        <div id='clickable1'>
          <div
            id='clickable2'
            onClick={(event) => {
              document.body.style.background = "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/fh4.jpg') ";
              this.setState({
                currentBackground: "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/fh4.jpg') no-repeat",
              });
              event.target.style.background = 'rgba(255, 255, 255, 0.26)';
              document.getElementById('clickable3').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable4').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable5').style.background = 'rgba(255, 255, 255, 0.14)';
            }}
          ></div>
          <div
            id='clickable3'
            onClick={(event) => {
              document.body.style.background =
                "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/something.jpg') no-repeat";
              this.setState({
                currentBackground: "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/something.jpg') no-repeat",
              });
              event.target.style.background = 'rgba(255, 255, 255, 0.26)';
              document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable4').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable5').style.background = 'rgba(255, 255, 255, 0.14)';
            }}
          ></div>
          <div
            id='clickable4'
            onClick={(event) => {
              document.body.style.background =
                "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/bg1.png') no-repeat";
              this.setState({
                currentBackground: "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/bg1.png') no-repeat",
              });
              event.target.style.background = 'rgba(255, 255, 255, 0.26)';
              document.getElementById('clickable2').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable3').style.background = 'rgba(255, 255, 255, 0.14)';
              document.getElementById('clickable5').style.background = 'rgba(255, 255, 255, 0.14)';
            }}
          ></div>
          <div
            id='clickable5'
            onClick={(event) => {
              document.body.style.background =
                "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/idk.jpg') no-repeat";
              this.setState({
                currentBackground: "url('https://raw.githubusercontent.com/Aurora-Media-Group/uk-website/master/src/images/idk.jpg') no-repeat",
              });
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
