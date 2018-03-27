import React, { Component } from 'react';
import NProgress from 'nprogress'
import Router from 'next/router'
import Meta from '../components/meta'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components';
import Loader from '../components/loader'
import ScrollUpButton from "react-scroll-up-button";

injectGlobal`

body {        
  margin:0;
  background-color: #000;
  color:#B3B3B3;
  line-height:1.42857;
  font-family:Arial,Helvetica,sans-serif;
  font-size:13px
}

@media only screen and (max-device-width: 1140px) {
  .slideShow {
      background-attachment: scroll
  }
}

a {
  color:#FFFFFF;
  text-decoration:none;
  background:transparent;
  cursor: pointer
}

a:hover {
  text-decoration: underline
}
*, ::before, ::after {
  box-sizing:border-box
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, li {
  color:inherit;
  font-family:Oswald;
  font-style:normal;
  font-weight:bold;
  line-height:1.1;  
  text-rendering: optimizelegibility
}

h1 {
  font-size: 33px  
}

img {
  vertical-align:middle;
  max-width: 100%;
  height: auto
}

img {
  border:0
}

.btn {  
  vertical-align: middle;
  color: #FFF;
  display: inline-block;
  height: 45px;
  line-height: 42px;
  text-align: center;
  transition: 0.5s;
  padding: 0 20px;
  cursor: pointer;
  border: 2px solid #FFFFFF;
  -webkit-transition:0.5s;
  -moz-transition:0.5s;
  -o-transition:0.5s;
  -ms-transition:0.5s;
  font-family: 'Oswald';
  background-color: #000;
  width:200px;
  font-size: 16px  
}

.btn:hover {
  border: 2px solid #FFFFFF;
  background-color: #FFFFFF;
  color: #000
}

.preloaderWrapper {
  overflow-x: hidden;
  position: relative;
  margin: 0 auto
}

.preloader {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  text-align: center;
  color: #fff;
  background-color: #000000
}

.preloader .typing_loader {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  -webkit-animation: Typing 1s linear infinite alternate;
  -moz-animation: Typing 1s linear infinite alternate;
  -o-animation: Typing 1s linear infinite alternate;
  -ms-animation: Typing 1s linear infinite alternate;
  animation: Typing 1s linear infinite alternate;
  margin: 15px auto;
  position: relative;
  left: -12px
}

@keyframes Typing {
  0% {
    background-color: rgba(255,255,255, 0.9);
    box-shadow: 12px 0 0 0 rgba(255, 255, 255, 0.2), 24px 0 0 0 rgba(255, 255, 255, 0.2)
  }
  25% {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 12px 0 0 0 rgba(255,255,255, 0.9), 24px 0 0 0 rgba(255, 255, 255, 0.2)
  }
  75% {
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 12px 0 0 0 rgba(255, 255, 255, 0.2), 24px 0 0 0 rgba(255,255,255, 0.9)
  }
}
`

Router.onRouteChangeStart = (url) => {
  NProgress.configure({ parent: '.nProgressHandler' })
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done();
  if (window.gtag) {
    window.gtag('config', window.gaTrackingId, {
      page_location: window.location.href,
      page_path: window.location.pathname,
      page_title: window.document.title,
    });
  }
};

Router.onRouteChangeError = () => NProgress.done()

const GeneralWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow : ${props => props.overflow};
  @media only screen and (max-device-width: 1140px) {
    .bgimg-2, .bgimg-3 {
        background-attachment: scroll;
    }
  }

  /* center frame */
  .tableHelper {
    display: table;
    table-layout: fixed;
    width: 100%;
    height: 100%
  }

  .cellHelper {
    display: table-cell;
    width: 100%;
    height: 100%;
    vertical-align: middle
  }

  #nprogress {
    pointer-events: none;
  }
  #nprogress .bar {        
    background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);    
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;        
  }
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;    
    opacity: 1.0;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }  
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }  
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }  
`;

export default class LayoutComponent extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let component = <GeneralWrapper style={{ overflow: 'visible' }} className="nProgressHandler"><Meta title={this.props.title} description={this.props.description} keywords={this.props.keywords} url={this.props.url}></Meta>{this.props.children}<ScrollUpButton /></GeneralWrapper>
    if (this.props.overflow === 'hidden') {
      component = <GeneralWrapper style={{ overflow: 'hidden' }} className="nProgressHandler"><Meta title={this.props.title} description={this.props.description} keywords={this.props.keywords} url={this.props.url}></Meta>{this.props.children}<ScrollUpButton /></GeneralWrapper>
    }
    return component;
  }
}