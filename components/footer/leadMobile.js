import React, { Component } from 'react';
import styled from 'styled-components'
import Link from 'next/link'

const CaptionSectionWrapper = styled.div`

    margin: 0 auto;
    width: 1160px; 
    text-align: justify;   
    position: absolute;
    left: 0;
    top: 10%;
    width: 100%;
    text-align: center;

    @media (max-width: 1160px) {
        width: 100%;
        position: absolute;
        left: 0;
        top: 10%;
        width: 100%;
        text-align: center;
    }
`;

export default class LeadMobile extends Component {

  constructor(props) {
    super(props) 
  }
  
  render() {

    return (
        <CaptionSectionWrapper>
            <h1 className="previewTitle">{this.props.leadNames}</h1>                            
            <h2 className="previewDescription">{this.props.leadTitle}</h2>
            <Link href={this.props.leadUrl}><input type="submit" value="ZOBACZ ZDJĘCIA" /></Link>
             
        <style jsx>{`
            .previewTitle {
                color #FFF;
                font-size: 50px;                    
            }

            .previewDescription {
                color: #FFF;
                font-size: 30px;
                padding: 20px 20px 40px 20px;
            }

            input[type=submit] {
                position:relative;
                vertical-align: middle;
                color: #FFF;
                display: inline-block;
                height: 60px;
                line-height: 40px;
                text-align: center;
                transition: 0.5s;
                padding: 0 20px;
                cursor: pointer;
                border: 4px solid #FFFFFF;
                -webkit-transition:0.5s;
                font-family: 'Oswald';
                background-color: transparent;
                width:180px;
                font-size: 16px;
            }

            input[type=submit]:hover {
                width:180px;
                border: 4px solid #33B59A;                        
                background-color: #33B59A;
            }
             
        `}</style>
      </CaptionSectionWrapper>
    );
  }
}