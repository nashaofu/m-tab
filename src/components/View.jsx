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
  minHeight: '100%'
}

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  minWidth: '100%',
  minHeight: '100%'
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
  changeImage() {
    const number = Math.ceil(Math.random() * 4050)
    const src = `http://img.infinitynewtab.com/wallpaper/${number}.jpg`
    this.props.setView({ image: src })
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
    let image = null
    let video = null
    if (!this.state.loading && this.props.image) {
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
    }
    return (
      <div style={style.view}>
        {image}
        {video}
        <div style={style.container} onClick={this.changeImage}>
          {this.props.children}
        </div>
      </div>
    )
  }
}
