import React, {Component} from 'react';
import {Card, Input, Icon, Form, Button, Select, Row, Col} from 'antd';
import MY_SERVICE from '../services/index';
import {Link} from 'react-router-dom';
export class Signup extends Component {
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
    const {Option} = Select;
    return (
      <div
        style={{
          margin: '0 auto'
        }}
      >
        <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          Signup
        </h2>
        <Row type="flex">
          <Col offset={4} span={8}>
            <Card>
              <Form onSubmit={this.onSubmit}>
                <Form.Item label="Username">
                  <Input
                    type="text"
                    onChange={this.handleInput}
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
                <Form.Item label="Select you campus">
                  <Select onChange={this.handleSelect.bind(this, 'campus')} placeholder="Select your campus">
                    <Option value="Amsterdam">Amsterdam</Option>
                    <Option value="Barcelona">Barcelona</Option>
                    <Option value="Berlin">Berlin</Option>
                    <Option value="Madrid">Madrid</Option>
                    <Option value="México">México</Option>
                    <Option value="Paris">Paris</Option>
                    <Option value="Sao Paulo">Sao Paulo</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Select your course">
                  <Select onChange={this.handleSelect.bind(this, 'course')} placeholder="Select you course">
                    <Option value="WebDev">WebDev</Option>
                    <Option value="UX/UI">UX/UI</Option>
                    <Option value="Data Science">Data Science</Option>
                  </Select>
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    Sign Up
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Link to="/">
                    <Button type="primary">Go Home</Button>
                  </Link>
                </Form.Item>
              </Form>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              style={{
                height: '100%'
              }}
            >
              <h2>Hello</h2>
              <p>Profile</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Signup;
