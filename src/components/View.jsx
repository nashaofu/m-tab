import React, { Component } from 'react'
import LinearProgress from 'material-ui/LinearProgress'
import { addResizeListener, removeResizeListener } from '../js/resize'
import Message from '../container/Message'

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
  // 自动切换背景定时
  autoplayTimer = null
  $bgimg = new Image()
  constructor(props) {
    super(props)
    this.state = {
      // 背景图历史记录
      history: [],
      // 当前动画效果
      animate: {
        in: null,
        out: null
      },
      width: 0,
      height: 0
    }
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
  }
  resize = () => {
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
  bindImageLoadEvent = () => {
    this.$bgimg.addEventListener('load', (e) => {
      const animate = Math.floor(Math.random() * this.props.animate.length)
      this.setState({
        animate: this.props.animate[animate]
      })
      this.props.setView(this.$bgimg.src)
      this.props.setViewStatus('success')
      this.push(this.props)
      this.autoplay()
    })
    this.$bgimg.addEventListener('error', () => {
      this.props.setViewStatus('fail')
      // this.props.setView(this.state.history[0])
      this.props.setMessage({
        open: true,
        message: '图片加载失败,请检查网络连接'
      })
    })
  }
  preLoadImage = (image) => {
    if (typeof image !== 'string') {
      return
    }
    this.props.setViewStatus('pending')
    this.$bgimg.src = image
  }
  push = ({ image, video }) => {
    this.setState({
      history: [
        {
          image,
          video
        },
        ...this.state.history
      ]
    })
  }
  getHistory = () => {
    const history = this.state.history
    return history[1] || history[0] || {}
  }
  autoplay = () => {
    if (this.props.autoplay) {
      clearTimeout(this.autoplayTimer)
      this.autoplayTimer = setTimeout(() => {
        this.changeImage()
      }, 2000)
    }
  }
  changeImage = () => {
    if (this.props.status === 'pending') {
      return
    }
    const id = Math.ceil(Math.random() * 4050)
    const image = `http://img.infinitynewtab.com/wallpaper/${id}.jpg`
    this.preLoadImage(image)
  }
  render() {
    const style = {
      view: {
        ...viewStyle
      },
      container: {
        ...containerStyle
      }
    }
    const prevImage = {
      show: true,
      attr: {
        style: {
          ...imageStyle,
          width: `${this.state.width}px`,
          height: `${this.state.height}px`
        }
      },
      render() {
        if (!this.show) {
          return
        }
        return <div {...this.attr} />
      }
    }
    const image = {
      show: true,
      attr: {
        style: {
          ...imageStyle,
          width: `${this.state.width}px`,
          height: `${this.state.height}px`
        }
      },
      render() {
        if (!this.show) {
          return
        }
        return <div {...this.attr} />
      }
    }
    const video = {
      show: false,
      attr: {
        style: {
          ...videoStyle,
          width: `${this.state.width}px`,
          height: `${this.state.height}px`
        }
      },
      render() {
        if (!this.show) {
          return
        }
        return <video autoPlay={true} loop={true} {...this.attr} />
      }
    }
    const progress = {
      show: false,
      attr: {
        style: progressStyle
      },
      render() {
        if (!this.show) {
          return
        }
        return <LinearProgress color="rgba(255,255,0,0.5)" {...this.attr} />
      }
    }
    let history = {}
    switch (this.props.status) {
      case 'success':
        history = this.state.history[1]
        image.attr.style.backgroundImage = `url(${this.props.image})`
        if (history) {
          image.attr.className = `animated ${this.state.animate.in}`
          prevImage.attr.style.backgroundImage = `url(${history.image})`
          prevImage.attr.className = `animated ${this.state.animate.out}`
        }
        if (this.props.video) {
          video.attr.src = this.props.video
          if (history) {
            video.className = `animated ${this.state.animate.in}`
          }
          video.show = true
        }
        break
      case 'pending':
      case 'fail':
      default:
        if (this.props.status === 'pending') {
          progress.show = true
        }
        history = this.state.history[0]
        if (history) {
          image.attr.style.backgroundImage = `url(${history.image})`
          prevImage.attr.style.backgroundImage = `url(${history.image})`
          if (history.video) {
            video.attr.src = history.video
            video.show = true
          }
        }
        break
    }
    return (
      <div style={style.view}>
        {prevImage.render()}
        {image.render()}
        {video.render()}
        {progress.render()}
        <div style={style.container}>
          {this.props.children}
        </div>
        <Message />
      </div>
    )
  }
}
