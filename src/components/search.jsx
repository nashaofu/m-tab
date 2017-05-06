import React, { Component } from 'react'
import TextField from 'material-ui/TextField'

const searchStyle = {
  width: 360,
  maxWidth: '100%',
  margin: '30px auto',
  alignSelf: 'center'
}

const floatingLabelStyle = {
  color: '#fff'
}

const inputStyle = {
  color: '#fff'
}

const underlineFocusStyle = {
  borderBottomColor: '#fff'
}

const floatingLabelFocusStyle = {
  color: 'rgba(255,255,255,0.6)'
}

const hintStyle = {
  color: 'rgba(255,255,255,0.6)'
}

export default class View extends Component {
  render() {
    const style = {
      search: {
        ...searchStyle
      },
      floatingLabel: {
        ...floatingLabelStyle
      }
    }
    return (
      <div style={style.search}>
        <TextField
          hintText="回车进行搜索"
          floatingLabelText="搜索"
          type="search"
          fullWidth={true}
          floatingLabelStyle={style.floatingLabel}
          floatingLabelFocusStyle={floatingLabelFocusStyle}
          inputStyle={inputStyle}
          hintStyle={hintStyle}
          underlineFocusStyle={underlineFocusStyle}
        />
      </div>
    )
  }
}
