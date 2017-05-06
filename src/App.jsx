import React, { Component } from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'

import View from './components/view'
import Grid from './components/grid'
import Search from './components/search'

import image from './images/bg.jpg'
import video from './video/bg.mp4'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <View image={image} video={video}>
          <Search />
          <Grid host="http://192.168.1.5:8080" />
        </View>
      </MuiThemeProvider>
    )
  }
}

