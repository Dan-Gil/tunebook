import React, {Component} from 'react';
import MY_SERVICE from '../services/index';

export default class Dashboard extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    if (!MY_SERVICE.loggedUser()) {
      return this.props.history.push('/login');
    }
  }

  render() {
    const loggedUser = MY_SERVICE.loggedUser();
    if (!MY_SERVICE.loggedUser()) {
      return null;
    }
    return (
      <div>
        <h1>Test</h1>
        <h2>Bienvenido {loggedUser.username} </h2>
      </div>
    );
  }
}
