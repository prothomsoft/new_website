import Link from 'next/link'
import React from 'react'

export default class MyLinkClientAreaOthers extends React.Component {
  render() {
    return (<a className="btn" onClick={this.handleClick}> {this.props.text}
      <style jsx>{`
        .btn {width: 100%}
      `}</style>
      </a>
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