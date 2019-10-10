import React, {Component} from 'react';
import MY_SERVICE from '../services/index';
import {Avatar, Button, Card, Carousel, Col, Comment, Form, Input, Row} from 'antd';

import UserCard from '../components/UserCard/UserCard';

export default class Dashboard extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    // if (!MY_SERVICE.loggedUser()) {
    //   return this.props.history.push('/login');
    // }
    this.loadUser();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match !== this.props.match) {
      this.loadUser();
    }
  }

  loadUser() {
    MY_SERVICE.getUser(this.props.match.params.id).then(response => {
      this.setState({
        user: response.data
      });
    });
  }

  render() {
    const loggedUser = MY_SERVICE.loggedUser();
    if (!MY_SERVICE.loggedUser()) {
      return null;
    }

    // const images = this.state.user.files.filter(file => file.type === 'Imagen');

    return (
      <div>
        <h2>Bienvenid@ "{loggedUser.username}" </h2>
        {/* 
        {images.length ? (
          <Row>
            <Col
              xl={{
                span: 16,
                offset: 4
              }}
              xxl={{
                span: 12,
                offset: 6
              }}
            >
              <Card>
                <Carousel effect="fade" autoplay style={{height: 400}}>
                  {images.map(file => (
                    <div key={file._id}>
                      <img
                        src={file.photo}
                        alt={file.name}
                        style={{
                          width: '100%',
                          height: '400px',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </Card>
            </Col>
          </Row>
        ) : null}
        <Row>
          <Col
            xl={{
              span: 16,
              offset: 4
            }}
            xxl={{
              span: 12,
              offset: 6
            }}
            style={{
              padding: '20px'
            }}
          >
            <UserCard user={this.state.user} />
          </Col>
        </Row> */}
      </div>
    );
  }
}
