/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      val: e.target.value
    });
  }

  handleSubmit(e) {
    console.log('state:', this.state);
    e.preventDefault();
  }

  render() {
    return (
      <form className='email-signup' onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="email" value={this.state.val} onChange={this.handleChange}/>
        </label>
        <button type="submit" value='submit'>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
