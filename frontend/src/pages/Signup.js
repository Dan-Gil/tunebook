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

  render() {
    return (
      <div>
        <div className="signup-form">
          <h2>Regístrate</h2>
          <Row type="flex">
            <Col
              xl={{
                span: 12,
                offset: 6
              }}
              xxl={{
                span: 12,
                offset: 6
              }}
              xs={{
                span: 18,
                offset: 2
              }}
            >
              <div className="card-shadow">
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
                      <Col
                        xl={{
                          span: 14,
                          offset: 4
                        }}
                        className="signup-buttons"
                      >
                        <Button htmlType="submit" type="primary">
                          Regístrate
                        </Button>
                        {/* </Col>

                      <Col offset={2} span={8}> */}
                        <Link to="/">
                          {' '}
                          <Button type="primary">Home</Button>
                        </Link>
                      </Col>
                    </Form.Item>
                    <small>
                      {' '}
                      Si ya tienes una cuenta, puedes ingresar <Link to="/login">aquí</Link>.
                    </small>
                  </Form>
                </Card>
              </div>
            </Col>
            <Col span={8}>
              {/* <Card>
              <Carousel effect="fade" autoplay>
                <div>
                  <img
                    src="https://www.thepubonpearl.com/wp-content/uploads/band-parallax.jpg"
                    alt="carousel"
                    style={{
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div>
                  <img
                    src="https://brignewspaperdotcom.files.wordpress.com/2019/09/71724727_2613067422083343_8206694299400667136_n.jpg"
                    alt="carousel"
                    style={{
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div>
                  <img
                    src="https://ak9.picdn.net/shutterstock/videos/13289129/thumb/1.jpg"
                    alt="carousel"
                    style={{
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
                <div>
                  <img
                    src="https://media.timeout.com/images/101206597/630/472/image.jpg"
                    alt="carousel"
                    style={{
                      height: '300px',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </Carousel>
            </Card> */}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
