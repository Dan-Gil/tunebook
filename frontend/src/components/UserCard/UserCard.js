import React, {Component} from 'react';
import {Avatar, Card, Col, Descriptions, Row} from 'antd';
import './UserCard.scss';

export default class UserCard extends Component {
  render() {
    const loggedUser = this.props.user;

    if (!loggedUser) {
      return null;
    }
    return (
      <div className="user-card">
        <Card>
          <Row>
            <Col xl={6}>
              <span className="profile-photo">
                {loggedUser.photo ? (
                  <Avatar size={200} src={loggedUser.photo} />
                ) : (
                  <Avatar size={200}>{loggedUser.username.slice(0, 1).toLocaleUpperCase()}</Avatar>
                )}
              </span>
            </Col>
            <Col xl={18}>
              <Descriptions title="Información del Usuario">
                <Descriptions.Item label={<strong>Nombre</strong>}>{loggedUser.name}</Descriptions.Item>
                <Descriptions.Item label={<strong>Apellido </strong>}>{loggedUser.lastName}</Descriptions.Item>
                <Descriptions.Item label={<strong>Correo Electrónico</strong>}>{loggedUser.email}</Descriptions.Item>
                <Descriptions.Item label={<strong>Géneros</strong>}>
                  <ul>
                    {loggedUser.genres.map(genre => (
                      <li key={genre._id}>{genre.name}</li>
                    ))}
                  </ul>
                </Descriptions.Item>
                <Descriptions.Item label={<strong>Instrumentos</strong>}>
                  <ul>
                    {loggedUser.instruments.map(instrument => (
                      <li key={instrument._id}>{instrument.name}</li>
                    ))}
                  </ul>
                </Descriptions.Item>
                <Descriptions.Item label={<strong>Biografía</strong>}>{loggedUser.biography}</Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}
