import React from 'react';

class CreateButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      className: ['dkpurple', 'purple', 'coral', 'blush', 'yellow', 'white']
    };
    this.handleClik = this.handleClik.bind(this);
  }

  handleClik() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  render() {
    return (
      <button onClick={this.handleClik} className={
        this.state.count <= 18
          ? this.state.className[Math.floor(this.state.count / 3) - 1]
          : 'white'
      }>
        Hot Button
      </button>
    );
  }
}

export default CreateButton;
