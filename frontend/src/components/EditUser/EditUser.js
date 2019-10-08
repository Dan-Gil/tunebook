import React, {Component} from 'react';
import {Button, Form, Icon, Input, Card} from 'antd';
import MY_SERVICE from '../services/index';

class EditUser extends Component {
  state = {
    user: {
      username: '',
      email: '',
      name: '',
      lastName: '',
      genres: '',
      instrumets: '',
      bio: '',
      location: '',
      files: '',
      biography: '',
      musicReading: '',
      influences: ''
    }
  };

  componentDidMount() {
    const loggedIn = MY_SERVICE.loggedUser();
    if (!loggedIn) {
      return this.props.history.push('/login');
    }
  }

  handleInput = e => {
    const {user} = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({user});
  };

  onSubmit = e => {
    e.preventDefault();
    MY_SERVICE.edit(this.state.user)
      .then(response => {
        MY_SERVICE.logUser(response.data.user);
        this.props.history.push('/profile');
      })
      .catch(console.error());
  };

  render() {
    const loggedUser = MY_SERVICE.loggedUser();
    //const {user} = this.state;
    //console.log(this.props);
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
            Edita tu perfil
          </h1>

          <Form onSubmit={this.onSubmit}>
            <Form.Item label="Nombre">
              <Input
                type="text"
                onChange={this.handleInput}
                name="name"
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder={loggedUser.name}
              />
            </Form.Item>
            <Form.Item label="Apellido">
              <Input
                type="text"
                onChange={this.handleInput}
                name="lastName"
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder={loggedUser.lastName}
              />
            </Form.Item>
            <Form.Item label="Nombre de usuario">
              <Input
                type="text"
                onChange={this.handleInput}
                name="username"
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder={loggedUser.username}
              />
            </Form.Item>
            <Form.Item label="Correo Electrónico">
              <Input
                type="email"
                onChange={this.handleInput}
                name="email"
                prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder={loggedUser.email}
              />
            </Form.Item>
            <Form.Item label="Contraseña">
              <Input
                onChange={this.handleInput}
                type="password"
                name="password"
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Contraseña"
              />
            </Form.Item>
            <Form.Item label="Foto de Perfil">
              <Input
                type="text"
                onChange={this.handleInput}
                name="photo"
                prefix={<Icon type="picture" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Imagen Url"
              />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Actualiza
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default EditUser;
