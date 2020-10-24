import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTitleClick: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.target;

  }

  render() {

  }
}

export default Accordion;
