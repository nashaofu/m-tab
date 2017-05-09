import React, { Component } from 'react'
import { addResizeListener, removeResizeListener } from '../js/resize'

const viewStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  backgroundColor: '#666'
}

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundSize: 'cover',
  minWidth: '100%',
  minHeight: '100%',
  opacity: 0,
  transition: 'opacity 0.5s cubic-bezier(0,0.3,1,0)'
}

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  minWidth: '100%',
  minHeight: '100%',
  opacity: 0,
  transition: 'opacity 0.3s cubic-bezier(0,0.3,1,0) 0.4s'
}

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}

export default class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      width: 0,
      height: 0
    }
    this.$bgimg = new Image()
    this.resize = this.resize.bind(this)
  }
  componentWillMount() {
    this.bindImageLoadEvent()
    this.preLoadImage(this.props.image)
    this.resize()
  }
  componentDidMount() {
    addResizeListener(this.resize)
  }
  componentWillUnmount() {
    removeResizeListener(this.resize)
  }
  componentWillReceiveProps({ image }) {
    if (this.props.image === image) {
      return
    }
    this.preLoadImage(image)
  }
  bindImageLoadEvent() {
    this.$bgimg.addEventListener('load', () => {
      this.setState({
        loading: false
      })
    })
  }
  preLoadImage(image) {
    if (typeof image !== 'string') {
      return
    }
    this.setState({
      loading: true
    })
    this.$bgimg.src = image
  }
  resize() {
    let width = window.innerWidth
    let height = window.innerHeight
    if (width / height < 1920 / 1080) {
      width = height * 1920 / 1080
    } else {
      height = width / 1920 * 1080
    }
    this.setState({
      width: width,
      height: height
    })
  }
  render() {
    const style = {
      image: {
        ...imageStyle,
        width: `${this.state.width}px`,
        height: `${this.state.height}px`
      },
      video: {
        ...videoStyle,
        width: `${this.state.width}px`,
        height: `${this.state.height}px`
      },
      view: {
        ...viewStyle
      },
      container: {
        ...containerStyle
      }
    }
    console.log(this.state)
    if (!this.state.loading) {
      style.image.backgroundImage = `url(${this.props.image})`
      style.image.opacity = 1
      if (this.props.video) {
        style.video.opacity = 1
      }
    }
    return (
      <div style={style.view}>
        <div style={style.image} />
        <video
          style={style.video}
          src={this.props.video}
          autoPlay
          loop
        />
        <div style={style.container}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
