import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'

const searchStyle = {
  display: 'flex',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 1000,
  alignItems: 'center'
}

const containerStyle = {
  width: 400,
  maxWidth: '100%',
  margin: '0 auto',
  padding: 48,
  backgroundColor: 'rgba(255,255,255,0.88)',
  borderRadius: 7
}

const maskStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(77,77,77,0.3)'
}

const hintStyle = {
  width: '100%',
  textAlign: 'center'
}

const inputStyle = {
  textAlign: 'center'
}

export default class View extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  close = () => {
    this.props.close()
  }
  change = (proxy, value) => {
    this.setState({
      value
    })
  }
  keyDown = (proxy, event) => {
    if (proxy.keyCode === 13) {
      window.location.href = `${this.props.engine}${this.state.value}`
    }
  }
  render() {
    const style = {
      search: {
        ...searchStyle
      },
      container: {
        ...containerStyle
      },
      mask: {
        ...maskStyle
      },
      input: {
        ...inputStyle
      },
      hint: {
        ...hintStyle
      }
    }

    if (!this.props.open) {
      return null
    }

    return (
      <div
        style={style.search}
      >
        <div
          className="animated fadeIn"
          style={style.mask}
          onClick={this.close}
        ></div>
        <Paper
          className="animated fadeIn"
          zDepth={5}
          style={style.container}
        >
          <TextField
            hintText="回车进行搜索"
            type="search"
            fullWidth={true}
            inputStyle={style.input}
            hintStyle={style.hint}
            onChange={this.change}
            onKeyDown={this.keyDown}
            value={this.state.value}
          />
        </Paper>
      </div>
    )
  }
}
