import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      isPassed: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      val: e.target.value
    });
    if (e.target.value.length >= 8) {
      this.setState({ isPassed: true });
    } else {
      this.setState({ isPassed: false });
    }
  }

  dataValidation(isPassed) {
    if (isPassed) {
      return <i className="fa fa-check fa-lg green"></i>;
    } else {
      return <i className="fa fa-times fa-lg red"></i>;
    }
  }

  errorMessage(currentVal) {
    if (currentVal === '') {
      return <p className='error red'>A password is required</p>;
    }
    if (currentVal.length < 8) {
      return <p className='error red'>Your password is too short.</p>;
    }
  }

  render() {
    return (
      <div className='row'>
        <form className='input'>
          <label>Password:</label>
          <input type="email" value={this.state.val} onChange={this.handleChange} />
          {this.dataValidation(this.state.isPassed)}
        </form>
        {this.errorMessage(this.state.val)}
      </div>
    );
  }
}

export default ValidatedInput;
