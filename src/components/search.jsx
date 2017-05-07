import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

const searchStyle = {
  width: 360,
  maxWidth: '100%',
  margin: '30px auto',
  alignSelf: 'center'
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
        ...searchStyle
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
          fullWidth={true}
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
