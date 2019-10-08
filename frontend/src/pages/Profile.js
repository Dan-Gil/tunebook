import React, {Component} from 'react';
import {Avatar, Card} from 'antd';
import MY_SERVICE from '../services/index';
import FileForm from '../components/File/FileForm';

export default class Profile extends Component {
  state = {
    user: {
      username: '',
      name: '',
      lastName: '',
      email: '',
      photo: ''
    }
  };

  componentDidMount() {
    const loggedIn = MY_SERVICE.loggedUser();
    if (!loggedIn) {
      return this.props.history.push('/login');
    }
  }

  render() {
    const loggedUser = MY_SERVICE.loggedUser();
    if (!MY_SERVICE.loggedUser()) {
      return null;
    }
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh'
        }}
      >
        <Card style={{width: '50vw'}}>
          <h1
            style={{
              color: '#342c4f'
            }}
          >
            Mi perfil
          </h1>
          <h2>Bienvenido "{loggedUser.username}" </h2>
          <div>
            {loggedUser.photo ? (
              <img
                src={loggedUser.photo}
                alt={loggedUser.username}
                style={{
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px'
                }}
              />
            ) : (
              <Avatar size="large">{loggedUser.username.slice(0, 1).toLocaleUpperCase()}</Avatar>
            )}
          </div>
        </Card>
        <FileForm />
      </div>
    );
  }
}
