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
      </div>
    )
  }
}