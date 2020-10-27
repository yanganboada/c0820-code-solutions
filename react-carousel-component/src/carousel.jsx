import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      isContolClicked: false
    };
    this.handlePreviousClick = this.handlePreviousClick.bind(this);
    this.hangleNextClick = this.hangleNextClick.bind(this);
  }

  handlePreviousClick(e) {
    console.log(e);
  }

  hangleNextClick(e) {
    console.log(e);
  }

  handleDotCLick(e) {
    console.log(e);
  }

  autoPlay() {

  }

  render() {
    return (
      <div className="carousel">
        <div className="carousel-body">
          <i className="fas fa-chevron-left fa-3x" onClick={this.handlePreviousClick}></i>
          {this.props.list.map((poke, index) => <img src={poke.imageUrl} key={index} alt={poke.name} />)}
          <i className="fas fa-chevron-right fa-3x" onClick={this.handleNextClick}></i>
        </div>
        <div className="dots">
          {this.props.list.forEach(index => <i className="fas fa-circle" key={index} onClick={this.handleDotCLick}></i>)}
          <i className="fas fa-circle"></i>
          <i className="far fa-circle"></i>
        </div>
      </div>
    );
  }

}

export default Carousel;
