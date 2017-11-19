import React, { Component } from 'react';
import styled from 'styled-components'

const CaptionSectionWrapper = styled.div`

    margin: 0 auto;
    width: 1160px; 
    text-align: justify;   
    position: absolute;
    left: 0;
    top: 33%;
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

export default class IntroTextAndArrow extends Component {

  constructor(props) {
    super(props) 
  }
  
  render() {

    return (
        <CaptionSectionWrapper>
            <h1 className="previewTitle">{this.props.menuNames}</h1>                            
            <h2 className="previewDescription">{this.props.menuTitle}</h2>
            <input type="submit" value={this.props.menuButton} />
            <div className="spacer" ></div>
            <div className="animated bounce">
                <div className="arrow"></div>
            </div>
            <style jsx>{`
            .spacer {
                height: 330px;
            }

            .arrow {
                margin: 0 auto;                    
                margin-bottom: 60px;
                border-right: 6px solid; 
                border-bottom: 6px solid;
                height: 25px;
                width: 25px;
                border-radius: 3px;
                transform: rotate(45deg);
                color: #FFFFFF;
                cursor: pointer;
                display:block;
            }
            .animated {
                -webkit-animation-duration: 1s;
                animation-duration: 1s;
                -webkit-animation-fill-mode: both;
                animation-fill-mode: both;
                -webkit-animation-timing-function: linear;
                animation-timing-function: linear;
                animation-iteration-count: infinite;
                -webkit-animation-iteration-count: infinite;
            }
            @-webkit-keyframes bounce {
                0%, 100% {
                    -webkit-transform: translateY(0);
                }
                50% {
                    -webkit-transform: translateY(-10px);
                }
            }
            @keyframes bounce {
                0%, 100% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-10px);
                }
            }
            .bounce {
                -webkit-animation-name: bounce;
                animation-name: bounce;
            }
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
                    width:20%;
                    font-size: 16px;
                }

                input[type=submit]:hover {
                    width:20%;
                    border: 4px solid #FFF;                        
                    background-color: #FFF;
                    color: #000;
                }
                
                input[type=submit]:focus {
                    outline:none;
                }
                
            `}</style>
      </CaptionSectionWrapper>
    );
  }
}
