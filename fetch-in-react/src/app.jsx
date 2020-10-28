/* eslint-disable no-console */
import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      error: null
    };
  }

  componentDidMount() {
    /* your code here */
    fetch('https://jsonplaceholder.typicode.com/uses')
      .then(res => {
        if (!res.ok) {
          this.setState({ error: `${res.status}` });
        } else {
          res.json();
        }
      })
      .then(res => res.json())
      .then(data => this.setState({ users: data, isLoading: false }))
      .catch(err => this.setState({ error: err.message }));
  }

  render() {
    return this.state.isLoading
      ? this.state.error
        ? <p>{this.state.error}</p>
        : <p>Loading...</p>
      : <UserList users={this.state.users}/>;
  }
}

export default App;
