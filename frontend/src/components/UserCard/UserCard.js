import React, {Component} from 'react';
import {Avatar, Col, Row} from 'antd';
import './UserCard.scss';

export default class UserCard extends Component {
  render() {
    const loggedUser = this.props.user;

    if (!loggedUser) {
      return null;
    }
    return (
      <div className="user-card">
        <Row gutter={24}>
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
            <Row gutter={16} className="profile-user-data">
              <Col span={8}>
                <Row>
                  <h4>Nombre: </h4>
                  <b>
                    {' '}
                    <span>{loggedUser.name}</span>
                  </b>
                </Row>
                <Row>
                  <h4>Apellido: </h4>
                  <b>
                    {' '}
                    <span>{loggedUser.lastName}</span>
                  </b>
                </Row>
                <Row>
                  <h4>Corre Electrónico: </h4>
                  <b>
                    <span>{loggedUser.email}</span>
                  </b>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <h4>Géneros:</h4>
                  <b>
                    <ul>
                      {loggedUser.genres.map(genre => (
                        <li key={genre._id}>{genre.name}</li>
                      ))}
                    </ul>
                  </b>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <h4>Instrumentos:</h4>
                  <b>
                    <ul>
                      {loggedUser.instruments.map(instrument => (
                        <li key={instrument._id}>{instrument.name}</li>
                      ))}
                    </ul>
                  </b>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
