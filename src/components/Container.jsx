import React, { Component } from 'react'

import View from '../container/View'
import Grid from '../components/Grid'
import Search from '../components/Search'

export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: {
        open: false,
        engine: 1
      }
    }
    this.closeSearch = this.closeSearch.bind(this)
  }
  closeSearch() {
    const search = this.state.search
    this.setState({
      search: {
        open: false,
        engine: search.engine
      }
    })
  }
  render() {
    return (
      <View>
        <Grid />
        <Search {...this.state.search} close={this.closeSearch} />
      </View>
    )
  }
}
