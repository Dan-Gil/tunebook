import React, {Component} from 'react';
import {Card, Form, Icon, Button, Input, Row, Col} from 'antd';
import MY_SERVICE from '../services/index';
import {Link} from 'react-router-dom';

export default class Login extends Component {
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
    MY_SERVICE.login(this.state.user)
      .then(response => {
        MY_SERVICE.logUser(response.data.user);
        this.props.history.push('/profile');
      })
      .catch(console.error());
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
          Ingresa
        </h2>
        <Row type="flex">
          <Col offset={4} span={8}>
            <Card
              style={{
                height: '70vh'
              }}
            >
              <Form onSubmit={this.onSubmit}>
                <Form.Item label="Username">
                  <Input
                    onChange={this.handleInput}
                    type="text"
                    name="username"
                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                    placeholder="Username"
                  />
                </Form.Item>
                <Form.Item label="Password">
                  <Input
                    onChange={this.handleInput}
                    type="password"
                    name="password"
                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                    placeholder="Password"
                  />
                </Form.Item>
                <small>
                  {' '}
                  Si no tienes una cuenta, puedes crear una <Link to="/signup">aquí</Link>.
                </small>
                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    Ingresa
                  </Button>
                </Form.Item>
              </Form>
            </Card>{' '}
          </Col>
          <Col span={8}>
            <Card
              className="left-side"
              style={{
                height: '70vh'
              }}
            ></Card>
          </Col>
        </Row>
      </div>
    );
  }
}
