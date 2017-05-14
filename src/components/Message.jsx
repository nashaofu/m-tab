import React, { Component } from 'react'
import Snackbar from 'material-ui/Snackbar'

export default class Message extends Component {
  render() {
    return (
      <Snackbar
        open={this.props.open}
        message={this.props.message}
        autoHideDuration={this.props.delay}
        onRequestClose={this.props.close}
      />
    )
  }
}
