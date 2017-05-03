import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
// import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <AppBar
        title="Title"
        iconElementRight={<IconButton><i className="material-icons">keyboard_arrow_down</i></IconButton>}
      />
    );
  }
}

export default App;
