import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui/GridList'

const icons = [
  {
    src: 'icon-0.png',
    title: 'icon-0.png',
    url: 'icon-0.png'
  },
  {
    src: 'icon-1.png',
    title: 'icon-1.png',
    url: 'icon-1.png'
  },
  {
    src: 'icon-2.png',
    title: 'icon-2.png',
    url: 'icon-2.png'
  },
  {
    src: 'icon-3.png',
    title: 'icon-3.png',
    url: 'icon-3.png'
  },
  {
    src: 'icon-4.png',
    title: 'icon-4.png',
    url: 'icon-4.png'
  },
  {
    src: 'icon-5.png',
    title: 'icon-5.png',
    url: 'icon-5.png'
  },
  {
    src: 'icon-6.png',
    title: 'icon-6.png',
    url: 'icon-6.png'
  },
  {
    src: 'icon-7.png',
    title: 'icon-7.png',
    url: 'icon-7.png'
  },
  {
    src: 'icon-8.png',
    title: 'icon-8.png',
    url: 'icon-8.png'
  },
  {
    src: 'icon-9.png',
    title: 'icon-9.png',
    url: 'icon-9.png'
  },
  {
    src: 'icon-10.png',
    title: 'icon-10.png',
    url: 'icon-10.png'
  },
  {
    src: 'icon-11.png',
    title: 'icon-11.png',
    url: 'icon-11.png'
  },
  {
    src: 'icon-12.png',
    title: 'icon-12.png',
    url: 'icon-12.png'
  },
  {
    src: 'icon-13.png',
    title: 'icon-13.png',
    url: 'icon-13.png'
  },
  {
    src: 'icon-14.png',
    title: 'icon-14.png',
    url: 'icon-14.png'
  },
  {
    src: 'icon-15.png',
    title: 'icon-15.png',
    url: 'icon-15.png'
  },
  {
    src: 'icon-16.png',
    title: 'icon-16.png',
    url: 'icon-16.png'
  },
  {
    src: 'icon-17.png',
    title: 'icon-17.png',
    url: 'icon-17.png'
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
  width: 88,
  height: 88,
  margin: '0 auto',
  boxShadow: '0 10px 20px rgba(0,0,0,0.4)'
}

export default class View extends Component {
  constructor() {
    super()
    this.state = {
      cols: 6
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
      titleStyle: {

      },
      icon: {

      }
    }
    return (
      <div style={style.grid}>
        <GridList
          cellHeight={120}
          cols={6}
          padding={10}
          style={style.gridList}
        >
          {icons.map((icon, index) => (
            <GridTile
              key={`${icon.title}-${index}`}
              title={icon.title}
              style={style.gridTile}
              titleStyle={style.titleStyle}
            >
              <img
                src={`${this.props.host}/icons/${icon.src}`}
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
