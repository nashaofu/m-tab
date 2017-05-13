import React, { Component } from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import { addResizeListener, removeResizeListener } from '../js/resize'

const viewStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  backgroundColor: '#ffeee0'
}

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundSize: 'cover',
  minWidth: '100%',
  minHeight: '100%'
}

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  minWidth: '100%',
  minHeight: '100%'
}

const progressStyle = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  left: 0,
  backgroundColor: 'rgba(0,0,0,0.4)'
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
      prevImage: null,
      prevVideo: null,
      width: 0,
      height: 0
    }
    this.$bgimg = new Image()
    this.resize = this.resize.bind(this)
    this.changeImage = this.changeImage.bind(this)
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
      this.props.setViewStatus('success')
      this.setState({
        prevImage: this.props.image,
        prevVideo: this.props.video
      })
    })
    this.$bgimg.addEventListener('error', () => {
      this.props.setViewStatus('fail')
    })
  }
  preLoadImage(image) {
    if (typeof image !== 'string') {
      return
    }
    this.props.setViewStatus('pending')
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
  autoplay() {
    if (this.props.autoplay) {
      setTimeout(() => {
        this.changeImage()
      }, 10000)
    }
  }
  changeImage() {
    if (this.props.status === 'pending') {
      return
    }
    const id = Math.ceil(Math.random() * 4050)
    const image = `http://img.infinitynewtab.com/wallpaper/${id}.jpg`
    this.props.setView(image)
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
      progress: {
        ...progressStyle
      },
      container: {
        ...containerStyle
      }
    }
    let image = null
    let video = null
    let progress = null
    switch (this.props.status) {
      case 'pending':
        image = <div
          style={{
            ...style.image,
            backgroundImage: `url(${this.state.prevImage})`
          }}
        />
        if (this.state.prevVideo) {
          video = <video
            style={style.video}
            src={this.state.prevVideo}
            autoPlay={true}
            loop={true}
          />
        }
        progress = <LinearProgress
          color="rgba(255,255,0,0.5)"
          style={style.progress}
        />
        break
      case 'success':
        image = <div
          className='animated fadeIn'
          style={{
            ...style.image,
            backgroundImage: `url(${this.props.image})`
          }}
        />
        if (this.props.video) {
          video = <video
            className='animated fadeIn'
            style={style.video}
            src={this.props.video}
            autoPlay={true}
            loop={true}
          />
        }
        break
      case 'fail':
      default:
        image = <div
          style={{
            ...style.image,
            backgroundImage: `url(${this.state.prevImage})`
          }}
        />
        if (this.state.prevVideo) {
          video = <video
            style={style.video}
            src={this.state.prevVideo}
            autoPlay={true}
            loop={true}
          />
        }
        break
    }
    return (
      <div style={style.view}>
        {image}
        {video}
        {progress}
        <div style={style.container} onClick={this.changeImage}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
