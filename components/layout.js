import NProgress from 'nprogress'
import Router from 'next/router'
import Meta from '../components/meta'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components';

injectGlobal`

body {        
  margin:0;
  background-color: #000;
  color:#B3B3B3;
  font-family:Arial, Helvetica, sans-serif;
  font-size:13px;
  line-height:1.42857;
}

a {
  color:#FFFFFF;
  text-decoration:none;
}
a {
  background:transparent;
}
*, ::before, ::after {
  box-sizing:border-box;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
  color:inherit;
  font-family:Oswald;
  font-style:normal;
  font-weight:bold;
  line-height:1.1;
}

img {
  vertical-align:middle;
}

img {
  border:0;
}
`

Router.onRouteChangeStart = (url) => {
  NProgress.configure({ parent: '.generalWrapper' });
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
    background: #1ea6cc;
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
    box-shadow: 0 0 10px #1ea6cc, 0 0 5px #1ea6cc;
    opacity: 1.0;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }
  #nprogress .spinner {
    /*display: block;
    /position: fixed;
    z-index:1;
    top: 10px;
    right: 10px;*/
  }
  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: #1ea6cc;
    border-left-color: #1ea6cc;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }
  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }
  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default ({ children, title, description, overflow }) => (
  
    <GeneralWrapper overflow={overflow}>
      <Meta></Meta>
      {children}
    </GeneralWrapper>
  
)