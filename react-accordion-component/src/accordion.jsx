import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      target: null,
      isTargetOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    !this.state.target
      ? this.setState({ target: e.target.textContent, isTargetOn: !this.state.isTargetOn })
      : this.setState(() => {
        if (this.state.target !== e.target.textContent) {
          return { target: e.target.textContent };
        } else {
          return { target: null, isTargetOn: !this.state.isTargetOn };
        }

      });
  }

  render() {
    // if (this.state.isTitleClicked) {
    return (
      <div>
        {this.props.list.map((item, index) => (
          <div className="box" key={index} >
            <h3 className="title" onClick={this.handleClick}>{item.subject}</h3>
            {
              this.state.target === item.subject
                ? <p className="description">{item.description}</p>
                : <p className="description hide">{item.description}</p>
            }
          </div>
        ))}
      </div>
    );
  }
}

export default Accordion;
