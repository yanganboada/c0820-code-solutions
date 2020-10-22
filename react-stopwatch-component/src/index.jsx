import React from 'react';
import ReactDOM from 'react-dom';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPause: false,
      count: 0
    };
    this.inervalCounter = null;
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  handlePlayClick() {
    this.setState({ isPause: !this.state.isPause });
    if (!this.state.isPause) {
      this.inervalCounter = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    } else {
      clearInterval(this.inervalCounter);
    }
  }

  handleResetClick() {
    this.setState({ count: 0 });
  }

  render() {
    if (!this.state.isPause) {
      return (
        < div className="row" >
          <div className="watch" onClick={this.handleResetClick}>
            <h1>{this.state.count}</h1>
          </div>
          <i className="fa fa-play fa-2x" onClick={this.handlePlayClick}></i>
        </div >
      );
    } else {
      return (
        < div className="row" >
          <div className="watch">
            <h1>{this.state.count}</h1>
          </div>
          <i className="fa fa-pause fa-2x" onClick={this.handlePlayClick}></i>
        </div >
      );
    }
  }
}

ReactDOM.render(
  <StopWatch />,
  document.getElementById('root')
);
