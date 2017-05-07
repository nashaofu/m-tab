import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import { addResizeListener, removeResizeListener } from '../js/resize'

const searchStyle = {
  position: 'absolute',
  right: 0,
  left: 0,
  textAlign: 'center'
}

const textFieldStyle = {
  width: 360,
  maxWidth: '100%',
  margin: '0 auto'
}

const hintStyle = {
  color: 'rgba(255,255,255,0.7)',
  width: '100%',
  textAlign: 'center'
}

const inputStyle = {
  color: '#fff',
  textAlign: 'center'
}

const underlineFocusStyle = {
  borderBottomColor: '#fff'
}

export default class View extends Component {
  constructor() {
    super()
    this.state = {
      top: null,
      value: '',
      engine: 'Google',
      engines: {
        'Baidu': {
          'url': 'https://www.baidu.com/s?wd='
        },
        'Google': {
          'url': 'https://www.google.com/search?q='
        },
        'Bing': {
          'url': 'https://www.bing.com/search?q=s'
        }
      }
    }
    this.change = this.change.bind(this)
    this.keyDown = this.keyDown.bind(this)
    this.resize = this.resize.bind(this)
  }
  componentDidMount() {
    addResizeListener(this.resize)
    this.resize()
  }
  componentWillUnmount() {
    removeResizeListener(this.resize)
  }
  resize() {
    if (window.innerWidth < 420) {
      this.setState({
        top: '10%'
      })
    } else if (window.innerWidth < 960) {
      this.setState({
        top: '14%'
      })
    } else {
      this.setState({
        top: '24%'
      })
    }
  }
  change(proxy, value) {
    this.setState({
      value
    })
  }
  keyDown(proxy, event) {
    if (proxy.keyCode === 13) {
      const engine = this.state.engines[this.state.engine]
      window.location.href = `${engine.url}${this.state.value}`
    }
  }
  render() {
    const style = {
      search: {
        ...searchStyle,
        top: this.state.top
      },
      textField: {
        ...textFieldStyle
      },
      input: {
        ...inputStyle
      },
      hint: {
        ...hintStyle
      },
      underlineFocus: {
        ...underlineFocusStyle
      }
    }
    return (
      <div style={style.search}>
        <TextField
          hintText="回车进行搜索"
          type="search"
          style={style.textField}
          inputStyle={style.input}
          hintStyle={style.hint}
          underlineFocusStyle={style.underlineFocus}
          onChange={this.change}
          onKeyDown={this.keyDown}
          value={this.state.value}
        />
      </div>
    )
  }
}
