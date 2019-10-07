import React, {Component} from 'react';
import {Card, Input, Icon, Form, Button, Row, Col} from 'antd';
import MY_SERVICE from '../services/index';
import {Link} from 'react-router-dom';

export default class Signup extends Component {
  state = {
    user: {}
  };

  handleInput = e => {
    const {user} = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({user});
  };

  onSubmit = e => {
    e.preventDefault();
    MY_SERVICE.signup(this.state.user)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/login');
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleSelect = (name, value) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      }
    });
  };

  render() {
    return (
      <div>
        <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2% 0'
          }}
        >
          Regístrate
        </h2>
        <Row type="flex">
          <Col offset={4} span={8}>
            <Card>
              <Form onSubmit={this.onSubmit}>
                <Form.Item label="Nombre">
                  <Input
                    type="text"
                    onChange={this.handleInput}
                    name="name"
                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                    placeholder="Name"
                  />
                </Form.Item>
                <Form.Item label="Apellido">
                  <Input
                    type="text"
                    onChange={this.handleInput}
                    name="lastName"
                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                    placeholder="Apellido"
                  />
                </Form.Item>
                <Form.Item label="Nombre de usuario">
                  <Input
                    type="text"
                    onChange={this.handleInput}
                    name="username"
                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                    placeholder="Nombre de usuario"
                  />
                </Form.Item>
                <Form.Item label="Correo Electrónico">
                  <Input
                    type="email"
                    onChange={this.handleInput}
                    name="email"
                    prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
                    placeholder="Correo Electrónico"
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

                <Form.Item>
                  <Col offset={4} span={8}>
                    <Button htmlType="submit" type="primary">
                      Regístrate
                    </Button>
                  </Col>

                  <Col offset={4} span={8}>
                    <Link to="/">
                      {' '}
                      <Button type="primary">Home</Button>
                    </Link>
                  </Col>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              className="left-side"
              style={{
                height: '100%'
              }}
            ></Card>
          </Col>
        </Row>
      </div>
    );
  }
}
