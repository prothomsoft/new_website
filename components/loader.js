import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.div`
    overflow-x: hidden;
    position: relative;
    margin: 0 auto;
    width: 1160px;
    text-align: justify;
    padding: 0 10px 0 10px;
    @media (max-width: 1160px) {
        width: 100%;
    }
`;

export default class Loader extends React.Component {
    render() {
        return (
            <SectionWrapper>
                <div className="preloader">
                    <div className="tableHelper">
                        <div className="cellHelper">
                            <div className="span">
                                <div className="typing_loader" />
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .preloader {
                        position: fixed;
                        width: 100%;
                        height: 100%;
                        left: 0;
                        right: 0;
                        z-index: 10;
                        text-align: center;
                        color: #fff;
                        background-color: #000000;
                    }

                    .preloader .typing_loader {
                        width: 6px;
                        height: 6px;
                        border-radius: 50%;
                        -webkit-animation: Typing 1s linear infinite alternate;
                        -moz-animation: Typing 1s linear infinite alternate;
                        -o-animation: Typing 1s linear infinite alternate;
                        -ms-animation: Typing 1s linear infinite alternate;
                        animation: Typing 1s linear infinite alternate;
                        margin: 15px auto;
                        position: relative;
                        left: -12px;
                    }

                    @keyframes Typing {
                        0% {
                            background-color: rgba(255, 255, 255, 0.9);
                            box-shadow: 12px 0 0 0 rgba(255, 255, 255, 0.2), 24px 0 0 0 rgba(255, 255, 255, 0.2);
                        }
                        25% {
                            background-color: rgba(255, 255, 255, 0.4);
                            box-shadow: 12px 0 0 0 rgba(255, 255, 255, 0.9), 24px 0 0 0 rgba(255, 255, 255, 0.2);
                        }
                        75% {
                            background-color: rgba(255, 255, 255, 0.4);
                            box-shadow: 12px 0 0 0 rgba(255, 255, 255, 0.2), 24px 0 0 0 rgba(255, 255, 255, 0.9);
                        }
                    }
                `}</style>
            </SectionWrapper>
        );
    }
}
