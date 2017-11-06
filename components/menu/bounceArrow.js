import React from 'react';

export default class BounceArrow extends React.Component {

    constructor(props) {
        super(props)        
    }

    render() {

        

        return (
            <div className="position animated bounce" style={{ display: `${this.props.display}` }}>
                <div className="tableHelper">
                    <div className="cellHelper">
                        <div className="arrow"></div>
                    </div>
                </div>
                <style jsx>{`
                .position {
                    position: absolute;                    
                    bottom: 0;
                }
                .arrow {
                    margin: 0 auto;                    
                    margin-bottom: 30px;
                    border-right: 6px solid; 
                    border-bottom: 6px solid;
                    height: 15px;
                    width: 15px;
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
            `}</style>
            </div>
        );
    }
}