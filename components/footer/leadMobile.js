import React, { Component } from "react";
import styled from "styled-components";
import Link from "next/link";

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
        super(props);
    }

    render() {
        return (
            <CaptionSectionWrapper>
                <p className="previewTitle">{this.props.leadNames}</p>
                <h5 className="previewDescription">{this.props.leadTitle}</h5>
                <Link href={this.props.leadUrl}>
                    <input type="submit" value="GALERIA ZDJĘĆ" />
                </Link>

                <style jsx>{`
            .previewTitle {
                font-family:Oswald;
                font-style:normal;
                font-weight:bold;
                line-height:1.4;  
                text-rendering: optimizelegibility;                
                color #FFF;
                font-size: 42px;                    
            }

            .previewDescription {
                color: #FFF;
                font-size: 24px;
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
				-moz-transition:0.5s;
				-o-transition:0.5s;
				-ms-transition:0.5s;
                font-family: 'Oswald';
                background-color: transparent;
                width:180px;
                font-size: 16px;
            }

            input[type=submit]:hover {
                width:180px;
                border: 4px solid #FFFFFF;                        
                background-color: #FFFFFF;
                color: #000;
            }
             
        `}</style>
            </CaptionSectionWrapper>
        );
    }
}
