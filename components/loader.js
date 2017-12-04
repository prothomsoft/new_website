import React from 'react';

export default class Loader extends React.Component {

  render() {
    return (
      <div className="preloaderWrapper">
        <div className="preloader">
          <div className="tableHelper">
            <div className="cellHelper">
              <div className="span">
                <div className="typing_loader"></div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`                  
              .preloaderWrapper {
                overflow-x: hidden;
                position: relative;
                margin: 0 auto
              }
          
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
                -webkit-animation: typing 1s linear infinite alternate;
				-moz-animation: typing 1s linear infinite alternate;
				-o-animation: typing 1s linear infinite alternate;
				-ms-animation: typing 1s linear infinite alternate;
                animation: typing 1s linear infinite alternate;
                margin: 15px auto;
                position: relative;
                left: -12px
              }
          
              @-webkit-keyframes typing {
                0% {
                  background-color: #fff;
                  box-shadow: 12px 0 0 0 rgba(255, 255, 255, .2), 24px 0 0 0 rgba(255, 255, 255, .2)
                }
                25% {
                  background-color: rgba(255, 255, 255, .4);
                  box-shadow: 12px 0 0 0 #fff, 24px 0 0 0 rgba(255, 255, 255, .2)
                }
                75% {
                  background-color: rgba(255, 255, 255, .4);
                  box-shadow: 12px 0 0 0 rgba(255, 255, 255, .2), 24px 0 0 0 #fff
                }
              }
          
              @keyframes typing {
                0% {
                  background-color: #fff;
                  box-shadow: 12px 0 0 0 rgba(255, 255, 255, .2), 24px 0 0 0 rgba(255, 255, 255, .2)
                }
                25% {
                  background-color: rgba(255, 255, 255, .4);
                  box-shadow: 12px 0 0 0 #fff, 24px 0 0 0 rgba(255, 255, 255, .2)
                }
                75% {
                  background-color: rgba(255, 255, 255, .4);
                  box-shadow: 12px 0 0 0 rgba(255, 255, 255, .2), 24px 0 0 0 #fff
                }
              }
              `}</style>
      </div>
    )
  }
}