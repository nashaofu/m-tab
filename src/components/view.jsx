import React, { Component } from 'react'

import bgImage from '../images/bg.jpg'
import bgVideo from '../video/bg.mp4'

const bgImageStyle = {
  display: 'block',
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
  minWidth: '100%',
  minHeight: '100%',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  opacity: 0
}

const bgContainerStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

export default class View extends Component {
  constructor() {
    super()
    let bg = new Image()
    this.state = {
      bgImageStyle,
      bgVideoStyle
    }
    bg.addEventListener('load', () => {
      const state = this.state
      state.bgImage = bgImage
      state.bgVideo = bgVideo
      this.setState(state)
      bg = null
    })
    bg.src = bgImage
  }
  render() {
    let video = null
    const {
      bgImage,
      bgVideo,
      bgImageStyle,
      bgVideoStyle
    } = this.state

    if (bgImage) {
      bgImageStyle.backgroundImage = `url(${bgImage})`
    }
    if (bgVideo) {
      bgVideoStyle.opacity = 1
    }
    return (
      <div style={{ ...bgImageStyle }}>
        <video style={{ ...bgVideoStyle }} src={bgVideo} autoPlay loop></video>
        <div style={bgContainerStyle}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
