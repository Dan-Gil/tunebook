import React, {Component} from 'react';
import MY_SERVICE from '../services';
import {Card} from 'antd';
import axios from 'axios';
export default class Message extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get('http://localhost:3000/user/:id')
      .then(({data}) => {
        this.setState({users: [...data.users]});
      })
      .catch(console.error);
  }

  render() {
    // const loggedUser = MY_SERVICE.loggedUser();

    // console.log(loggedUser);
    // if (!MY_SERVICE.loggedUser()) {
    //   return null;
    // }
    const {users} = this.state;
    console.log(users);
    return (
      <div>
        <h1>Mensajes</h1>
      </div>
    );
  }
}
