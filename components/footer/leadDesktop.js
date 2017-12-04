import React, { Component } from 'react';
import styled from 'styled-components'
import Link from 'next/link'

const CaptionSectionWrapper = styled.div`

    input[type=submit] {
        position:relative;
        vertical-align: middle;        
        display: inline-block;
        height: 60px;
        line-height: 40px;
        text-align: center;
        transition: 0.5s;
        padding: 0 20px;
        cursor: pointer;        
        -webkit-transition:0.5s;
		-moz-transition:0.5s;
		-o-transition:0.5s;
		-ms-transition:0.5s;
        font-family: 'Oswald';
        background-color: transparent;
        width:20%;
        font-size: 16px;
        border: ${props => props.black ? '4px solid #000' : '4px solid #FFF'};        
        color: ${props => props.black ? '#000' : '#FFF'};
    }

    input[type=submit]:hover {
        width:20%;
        border: ${props => props.black ? '4px solid #000' : '4px solid #FFF'};        
        background-color: ${props => props.black ? '#FFF' : '#FFF'};
        color: #000;   
    }

    margin: 0 auto;
    width: 1160px; 
    text-align: justify;   
    position: absolute;
    left: 0;
    top: 30%;
    width: 100%;
    text-align: center;

    @media (max-width: 1160px) {
        width: 100%;
        position: absolute;
        left: 0;
        top: 50%;
        width: 100%;
        text-align: center;
    }
`;

export default class LeadDesktop extends Component {

  constructor(props) {
    super(props) 
  }
  
  render() {

    return (
        <div>
            <CaptionSectionWrapper>                                
                <p className="previewTitle">{this.props.leadNames}</p>
                <h5 className="previewDescription">{this.props.leadTitle}</h5>
                <Link href={this.props.leadUrl}><input type="submit" value="GALERIA ZDJĘĆ" /></Link>
            <style jsx>{`                
                .previewTitle {                
                    font-size: 50px;
                    font-family:Oswald;
                    font-style:normal;
                    font-weight:bold;
                    line-height:1.1;  
                    text-rendering: optimizelegibility;
                    color: #FFF;
                }
                .previewDescription {                
                    font-size: 30px;
                    padding: 20px 20px 40px 20px;
                    color: #FFF;
                }
            `}</style>
        </CaptionSectionWrapper>
      </div>
    );
  }
}