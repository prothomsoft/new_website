import React from 'react';

class ExampleComponent extends React.Component{

    constructor() {
        super()
        this.state = {
          value: 'S'
        }
      }

      handleClickButtonX() {
        this.setState({value: 'X'})
      }

      handleClickButtonY() {
        this.setState({value: 'Y'})
      }

    render() {
        return (
            <div>
            {this.state.value}
            <button className="square" onClick={() => this.handleClickButtonX()}>
                Button X
            </button>
            <button className="square" onClick={() => this.handleClickButtonY()}>
                Button Y
            </button>             

            </div>
        )
    }
}

export default ExampleComponent;