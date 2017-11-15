import React, { Component } from 'react';
import NProgress from 'nprogress'
import Router from 'next/router'
import Meta from '../components/meta'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components';
import Loader from '../components/loader'

injectGlobal`

body {        
  margin:0;
  background-color: #000;
  color:#B3B3B3;
  line-height:1.42857;
  font-family:Arial,Helvetica,sans-serif;
  font-size:13px;
}

@media only screen and (max-device-width: 1060px) {
  .slideShow {
      background-attachment: scroll;
  }
}

a {
  color:#FFFFFF;
  text-decoration:none;
  background:transparent;
}

a:hover {
  text-decoration: underline;
}
*, ::before, ::after {
  box-sizing:border-box;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6, li {
  color:inherit;
  font-family:Oswald;
  font-style:normal;
  font-weight:bold;
  line-height:1.1;  
  text-rendering: optimizelegibility;
}

h1 {
  font-size: 33px;  
}

img {
  vertical-align:middle;
  max-width: 100%;
  height: auto;
}

img {
  border:0;
}

.btn {
  -webkit-border-radius: 4;
  -moz-border-radius: 4;
  border-radius: 4px;        
  color: #ffffff;
  background: #000;
  padding: 8px 16px 8px 16px;
  border: solid #B3B3B3 1px;
  text-decoration: none;
}

.btn:hover {
  border: solid #FFF 1px;
  text-decoration: none;
}
`

Router.onRouteChangeStart = (url) => {
  NProgress.configure({ parent: '.nProgressHandler' })
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

const GeneralWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
  overflow : ${props => props.overflow};
  @media only screen and (max-device-width: 1024px) {
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
    xbackground: #FFFFFF;
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
    let component = <GeneralWrapper style={{ overflow: 'visible' }} className="nProgressHandler"><Meta title={this.props.title} description={this.props.description} keywords={this.props.keywords} url={this.props.url}></Meta>{this.props.children}</GeneralWrapper>
    if (this.props.overflow === 'hidden') {
      component = <GeneralWrapper style={{ overflow: 'hidden' }} className="nProgressHandler"><Meta title={this.props.title} description={this.props.description} keywords={this.props.keywords} url={this.props.url}></Meta>{this.props.children}</GeneralWrapper>
    }
    return component;
  }
}