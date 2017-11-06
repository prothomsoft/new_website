import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

export default class LazyLoadWrapper extends Component {
  constructor(props) {
    super(props) 
  }

  render() {

    return <div>
      {this.props.images.map((image, key) =>             
            <LazyLoadSwitch imageSrc={image.imageSrc} height={image.height} key={image.imageSrc} />
        )}
    </div>;
  }
}

function LazyLoadSwitch(props) {
  if(props.height == 0) {
    return <LazyLoadNoHeight imageSrc={props.imageSrc}/>
  } else {
      return <LazyLoadHeight height={props.height} imageSrc={props.imageSrc}/>
  }  
}

function LazyLoadNoHeight(props) {
  return (
    <LazyLoad offsetVertical={300}><img src={props.imageSrc} /></LazyLoad>
  )
}

function LazyLoadHeight(props) {
  return (
    <LazyLoad height={props.height} offsetVertical={300}><img src={props.imageSrc} /></LazyLoad>
  )
}

