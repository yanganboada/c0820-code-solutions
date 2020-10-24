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
    const currentVal = e.target.value;
    this.setState({
      val: currentVal
    });
    if (
      currentVal.length >= 8 &&
      currentVal.match(/\d+/g) &&
      currentVal.match(/.*[A-Z]/g) &&
      currentVal.match(/[!@#$%^&*()]/g)
    ) {
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
    if (!currentVal.match(/\d+/g)) {
      return <p className='error red'>You must include at leaset 1 number</p>;
    }
    if (!currentVal.match(/.*[A-Z]/g)) {
      return <p className='error red'>You must include at leaset 1 capital letter</p>;
    }
    if (!currentVal.match(/[!@#$%^&*()]/g)) {
      return <p className='error red'>You must include at leaset 1 symbol eg.@#$</p>;
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
