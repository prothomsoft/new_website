import React, { Component } from 'react';



export default class WindowRoot extends Component {
  state = {
    visibility: 'hidden',
  };

  handleChange = event => {
    this.setState({
      visibility: event.isIntersecting ? 'visible' : 'invisible',
    });
  };

  render() {
    return (
      <div>
123
      </div>
    );
  }
}