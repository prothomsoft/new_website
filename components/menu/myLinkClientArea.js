import Link from 'next/link'
import React from 'react'
import LazyLoad from 'react-lazy-load';

export default class MyLinkClientArea extends React.Component {
  render() {
    return (      
      <a onClick={this.handleClick}><LazyLoad height={225} offsetVertical={300}><img src={this.props.src} /></LazyLoad></a>
    )
  }

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event)
    }

    if (this.props.onCustomClick) {
      this.props.onCustomClick(event)
    }
  }
}