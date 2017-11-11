import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';
import Link from 'next/link'

export default class FooterMobile extends Component {

    constructor(props) {
        super(props)    
    }

    
  
  render() {
    
    return (
      <div>
        <article>
          </article>
       
        <style jsx>{`

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  font-family: 'Oswald';
  height: 280px;
  width: 100%;
  color #FFF;                    
}

blockquote {
  font-size: 14px;
  margin: 5px 0;
}                
              
.quote-title::before,
.quote-title::after {
  content: '';
  display: block;
  border: 1px solid #666666;                    
}

.pseudo-elements::before,
.pseudo-elements::after {
  content: '';
  display: block;                    
}

.quote-title {
  display: flex;
  align-items: center;
  color: #FFFFFF;
}

.quote-title::before,
.quote-title::after {
  flex-grow: 1;
  margin: 0 20px;
}               

.pseudo-elements {                    
  box-sizing: border-box;
  padding: 5px;
  border: 5px solid #FF9900;
  position: relative;                    
}

.pseudo-elements::before {
  border: none;
  height: 6px;
  width: 380px;
  background: #000;
  position: absolute;
  top:-5px;                    
  left:0;
  right:0;
  margin: auto;
  xbox-shadow: 0 275px 0 #000;
}

.pseudo-elements::after {
  border: none;
  height: 0px;
  width: 6px;
  background: #000;
  position: absolute;
  left:-5px;
  top:0;
  bottom:0;
  margin: auto;
  box-shadow: 1135px 0 0 #000;
}

.spacer {
  height:20px;
}

.header h1 {
  padding: 10 0 0px 0;
  margin :0px;
  text-align: center;
  color: #FFF;                    
}


.white {
  color: #FFF;
}

.center {
  text-align: center;
}

h1, h2 {
  color #FFF;
}

.footerContainer {          
  padding: 10px 0 40px 0;
}

.footer {          
  text-align: center;
  height:210px;                              
}

.boxCenter {
  width:34%;
  xborder-left: 1px solid #666;
  xborder-right: 1px solid #666;
}

.box {          
  width:33%;
  height:210px;
  float: left;
  text-align: center;
}

.frame {          
  height:210px;
  float: left;
  text-align: center;
}

.center {
  text-align: center;
}

.spacer {
  height: 30px;
}

.instagram {
  height: 230px;
  border: 1px solid #BEBEBE;
}
             
        `}</style>
      </div>
    );
  }
}