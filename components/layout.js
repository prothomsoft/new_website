import React, { Component } from "react";
import Router from "next/router";
import Meta from "../components/meta";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { initGA, logPageView } from "../components/utils/analytics";
import ScrollUpButton from "../components/utils/react-scroll-up-button";

export const GlobalStyle = createGlobalStyle`
body {
  margin:0;
  background-color: #000;
  color:#B3B3B3;
  line-height:1.4;
  font-family:Arial,Helvetica,sans-serif;
  font-size:13px;
  overflow-x: hidden;
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
  line-height:1.4;
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
  line-height: 40px;
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
}`;

Router.onRouteChangeComplete = () => {
    if (window.gtag) {
        window.gtag("config", window.gaTrackingId, {
            page_location: window.location.href,
            page_path: window.location.pathname,
            page_title: window.document.title,
        });
    }
};

const GeneralWrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    overflow: ${(props) => props.overflow};
    @media only screen and (max-device-width: 1140px) {
        .bgimg-2,
        .bgimg-3 {
            background-attachment: scroll;
        }
    }
    .tableHelper {
        display: table;
        table-layout: fixed;
        width: 100%;
        height: 100%;
    }
    .cellHelper {
        display: table-cell;
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }    
`;

export default class LayoutComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true;
        }
        logPageView();
    }
    render() {
        let component = (
            <GeneralWrapper style={{ overflow: "visible" }}>
                <Meta title={this.props.title} description={this.props.description} keywords={this.props.keywords} />
                <GlobalStyle />
                {this.props.children}
                <ScrollUpButton style={{ width: 40 }} ToggledStyle={{ right: 20 }} />
            </GeneralWrapper>
        );
        if (this.props.overflow === "hidden") {
            component = (
                <GeneralWrapper style={{ overflow: "hidden" }}>
                    <Meta title={this.props.title} description={this.props.description} keywords={this.props.keywords} />
                    <GlobalStyle />
                    {this.props.children}
                    <ScrollUpButton style={{ width: 40 }} ToggledStyle={{ right: 20 }} />
                </GeneralWrapper>
            );
        }
        return component;
    }
}
