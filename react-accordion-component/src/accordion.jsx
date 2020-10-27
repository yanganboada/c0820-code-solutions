import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      index: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.state.index !== index
      ? this.setState({ index: index })
      : this.setState({ index: null });
  }

  render() {
    return (
      <div>
        {this.props.list.map((item, index) => (
          <div className="box" key={index} >
            <h3 className="title" onClick={() => this.handleClick(index)}>{item.subject}</h3>
            {
              this.state.index === index
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
