import React, { Component } from 'react';

export default class RevealP extends Component {

    constructor(props) {
        super(props)
        this.state = {
            imagePreloaded: '/static/blank.gif'
        }
        this.handleLoad = this.handleLoad.bind(this);
    }

    handleLoad(e) {
        this.setState({
            imagePreloaded: this.props.imageSrc
        });
    }

    componentWillUnmount() {
        this.image.onerror = null;
        this.image.onload = null;
        this.image = null;     
    }
  
  render() {
    if(this.props.show) {
        this.image = new Image();
        this.image.src = this.props.imageSrc;
        this.image.onload = this.handleLoad;
    }

    let styleFadeInOut = 'size fadeOut';
    if (this.state.imagePreloaded) {
        styleFadeInOut = 'size fadeIn';
    } else {
        styleFadeInOut = 'size fadeOut';
    }
    return (
      <div className={styleFadeInOut}>
        <img src={this.state.imagePreloaded} style={{height:"700px"}}/>
        <style jsx>{`
            .size {
                height: 700px;                
            }            
            .fadeIn {                
                opacity: 1;
                animation: FadeIn 1s ease-in-out;
            }
            .fadeOut {                
                opacity: 0;
                animation: FadeOut 1s ease-in-out;
            }
            @keyframes FadeIn {
                0% {
                opacity: 0;                
                }
                100% {
                opacity: 1;
                
                }
            }
            @keyframes FadeOut {
                0% {
                    opacity: 1;                
                }
                99% {
                    opacity: 0;                
                }
                100% {
                    opacity: 0;
                }
            }           
        `}</style>
      </div>
    );
  }
}