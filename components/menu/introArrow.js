import React from 'react';
import Scroll from 'react-scroll';

var LinkScroll = Scroll.Link;

export default class IntroArrow extends React.Component {

    constructor(props) {
        super(props)        
    }

    render() {
     
        return (
            <div>                
                <div className="position animated bounce">                
                    <div className="tableHelper">
                        <div className="cellHelper">
                            <div className="arrow"></div>                        
                        </div>
                    </div>
                </div>
                
                <style jsx>{`
                .position {
                    position: absolute;                    
                    bottom: 0;
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
					-moz-animation-duration: 1s;
					-o-animation-duration: 1s;
					-ms-animation-duration: 1s;
					animation-duration: 1s;
					-webkit-animation-fill-mode: both;
					-moz-animation-fill-mode: both;
					-o-animation-fill-mode: both;
					-ms-animation-fill-mode: both;
					animation-fill-mode: both;
					-webkit-animation-timing-function: linear;
					-moz-animation-timing-function: linear;
					-o-animation-timing-function: linear;
					-ms-animation-timing-function: linear;
					animation-timing-function: linear;
					animation-iteration-count: infinite;
					-webkit-animation-iteration-count: infinite;
					-moz-animation-iteration-count: infinite;
					-o-animation-iteration-count: infinite;
					-ms-animation-iteration-count: infinite;
				}
				@-webkit-keyframes bounce {
					0%, 100% {
						-webkit-transform: translateY(0);
						-moz-transform: translateY(0);
						-o-transform: translateY(0);
						-ms-transform: translateY(0);
					}
					50% {
						-webkit-transform: translateY(-10px);
						-moz-transform: translateY(-10px);
						-o-transform: translateY(-10px);
						-ms-transform: translateY(-10px);
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
					-moz-animation-name: bounce;
					-o-animation-name: bounce;
					-ms-animation-name: bounce;
					animation-name: bounce;
				}
            `}</style>
            </div>
        );
    }
}