import React, {Component} from 'react';
import MY_SERVICE from '../services/index';
// import UserCard from '../components/UserCard/UserCard';

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
        <h2>Bienvenid@ "{loggedUser.username}" </h2>

        {/* <UserCard /> */}
      </div>
    );
  }
}
