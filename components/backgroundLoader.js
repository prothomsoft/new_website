import React from 'react';
import Loader from '../components/loader'

export default class BackgroundLoader extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    this.image = new Image();
    this.image.src = this.props.src;
    this.image.onload = this.handleLoad;
  }

  shouldComponentUpdate(nextState, nextProps) {
    return !this.state.loaded;
  }

  componentWillUnmount() {
    this.image.onerror = null;
    this.image.onload = null;
    this.image = null;
  }

  handleLoad(e) {
    this.setState({
      loaded: true
    });
  }

  render() {
    let html = null;
    if (this.state.loaded) {
      html = <div className="bgimg-1" style={{ backgroundImage: `url(${this.props.src})` }}>{this.props.children}</div>
    } else {
      html = <Loader />
    }
    return (
      <div>{html}</div>
    )
  }
}