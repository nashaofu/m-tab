import React, { Component } from 'react'

const imageStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  backgroundSize: 'cover',
  minWidth: '100%',
  minHeight: '100%'
}

export default class ViewImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      // 当前动画效果
      animate: {
        in: null,
        out: null
      }
    }
  }
  render() {
    if (!this.show) {
      return
    }
    const prevImage = {
      style: {
        ...imageStyle,
        width: `${this.state.width}px`,
        height: `${this.state.height}px`,
        backgroundImage: `url(${this.props.prevImage})`
      },
      className: `animated ${this.state.animate.out}`
    }
    const image = {
      style: {
        ...imageStyle,
        width: `${this.state.width}px`,
        height: `${this.state.height}px`,
        backgroundImage: `url(${this.props.image})`
      },
      className: `animated ${this.state.animate.in}`
    }

    return (
      <div>
        <div {...prevImage} />
        <div {...image} />
      </div>
    )
  }
}
