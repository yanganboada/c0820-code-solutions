import React from 'react';

class CreateSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }

  render() {
    if (!this.state.isToggleOn) {
      return (
        <div className="row">
          <div className="switch off">
            <button onClick={this.handleClick}></button>
          </div >
          <h1>Off</h1>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="switch on">
            <button onClick={this.handleClick}></button>
          </div >
          <h1>On</h1>
        </div>
      );
    }
  }

}

export default CreateSwitch;
