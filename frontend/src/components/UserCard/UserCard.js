import React, {Component} from 'react';
import MY_SERVICE from '../../services';
import {Card, Descriptions, Avatar} from 'antd';

export default class UserCard extends Component {
  state = {
    user: ''
  };

  componentDidMount() {
    const loggedIn = MY_SERVICE.loggedUser();
    if (!loggedIn) {
      return this.props.history.push('/login');
    }
  }

  render() {
    const loggedUser = MY_SERVICE.loggedUser();

    console.log(loggedUser);
    if (!MY_SERVICE.loggedUser()) {
      return null;
    }
    return (
      <div>
        <Card md={4} offset={8} span={8}>
          <h1
            style={{
              color: '#342c4f'
            }}
          >
            Mi perfil
          </h1>
          <h2>Bienvenid@ "{loggedUser.username}" </h2>
          <div>
            <span className="profile-photo">
              {loggedUser.photo ? (
                <Avatar size={150} src={loggedUser.photo} />
              ) : (
                <Avatar size={150}>{loggedUser.username.slice(0, 1).toLocaleUpperCase()}</Avatar>
              )}
            </span>
            <Descriptions title="Información del Usuario">
              <Descriptions.Item label="Nombre">{loggedUser.name}</Descriptions.Item>
              <Descriptions.Item label="Apellido">{loggedUser.lastName}</Descriptions.Item>
              <Descriptions.Item label="Correo Electrónico">{loggedUser.email}</Descriptions.Item>
              {/* <Descriptions.Item label="Géneros">{loggedUser.genres[0].name}</Descriptions.Item> */}
            </Descriptions>
          </div>
          <div></div>
        </Card>
      </div>
    );
  }
}
