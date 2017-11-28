import Link from 'next/link'
import React from 'react'
import LazyLoad from 'react-lazy-load';

export default class MyLinkClientAreaMobile extends React.Component {
  render() {
    return (      
      <a onClick={this.handleClick}><LazyLoad offsetVertical={300}><img src={this.props.src} /></LazyLoad></a>
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