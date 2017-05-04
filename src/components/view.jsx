import React, { Component } from 'react';

import bgImage from '../images/bg.jpg'
import bgVideo from '../video/bg.mp4'

const bgImageStyle = {
  display: 'block',
  width: '100%',
  height: '100%',
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}

const bgVideoStyle = {
  display: 'block',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  opacity: 1
}

const bgContainerStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

export default class View extends Component {
  render() {
    return (
      <div style={{
        ...bgImageStyle,
        backgroundImage: `url(${bgImage})`,
      }}>
        <video style={bgVideoStyle} src={bgVideo} autoPlay loop></video>
        <div style={bgContainerStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
