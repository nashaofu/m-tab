import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import application from '../images/icons/application.png'
import appstore from '../images/icons/appstore.png'
import bookmark from '../images/icons/bookmark.png'
import history from '../images/icons/history.png'

const icons = [
  {
    src: application,
    title: '应用',
    url: 'chrome://apps/'
  },
  {
    src: appstore,
    title: '应用商店',
    url: 'https://chrome.google.com/webstore'
  },
  {
    src: bookmark,
    title: '书签',
    url: 'chrome://bookmarks/'
  },
  {
    src: history,
    title: '历史记录',
    url: 'chrome://history/'
  }
]

const gridStyle = {
  display: 'flex',
  alignItems: 'center',
  maxWidth: '100%',
  margin: '0 auto'
}
const gridListStyle = {
  width: 960
}
const gridTileStyle = {
  width: 120,
  height: 120,
  margin: '0 auto',
  boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
  cursor: 'pointer'
}
const titleStyle = {
}
const iconStyle = {
  width: '100%',
  height: '100%'
}

export default class View extends Component {
  constructor() {
    super()
    this.state = {
      cols: 5
    }
  }
  click(proxy, icon) {
    if (icon.url) {
      window.location.href = icon.url
    }
  }
  render() {
    const style = {
      grid: {
        ...gridStyle
      },
      gridList: {
        ...gridListStyle
      },
      gridTile: {
        ...gridTileStyle
      },
      title: {
        ...titleStyle
      },
      icon: {
        ...iconStyle
      }
    }
    return (
      <div style={style.grid}>
        <GridList
          cellHeight={120}
          cols={this.state.cols}
          padding={10}
          style={style.gridList}
        >
          {icons.map((icon, index) => (
            <GridTile
              key={`${icon.title}-${index}`}
              title={icon.title}
              onClick={e => this.click(e, icon)}
              style={style.gridTile}
              titleStyle={style.title}
            >
              <img
                src={icon.src}
                style={style.icon}
                alt={icon.title}
              />
            </GridTile>
          ))}
        </GridList>
      </div>
    )
  }
}
