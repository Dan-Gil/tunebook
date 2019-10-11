import React, {Component} from 'react';
import MY_SERVICE from '../services/index';
import {Avatar, Button, Card, Carousel, Col, Comment, Form, Input, Row} from 'antd';
import UserCard from '../components/UserCard/UserCard';

const {TextArea} = Input;

class User extends Component {
  state = {
    user: null,
    message: ''
  };

  componentDidMount() {
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

  handleAddComment = e => {
    e.preventDefault();
    MY_SERVICE.sendMessage(this.state.user._id, this.state.message)
      .then(() => {
        this.setState({
          message: ''
        });
      })
      .catch(console.error);
  };

  handleMessageChange = e => {
    this.setState({
      message: e.target.value
    });
  };

  render() {
    if (!this.state.user) {
      return null;
    }
    const loggedUser = MY_SERVICE.loggedUser();
    if (!MY_SERVICE.loggedUser()) {
      return null;
    }

    const images = this.state.user.files.filter(file => file.type === 'Imagen');

    return (
      <div className="user-form">
        <Row>
          <Col span={24}> {images.length ? <Row></Row> : null}</Col>
          <Col span={24}>
            <UserCard user={this.state.user} />
          </Col>
        </Row>
        <Row>
          <Carousel effect="fade" autoplay style={{width: 700, margin: '0 auto'}}>
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
        </Row>

        <Row>
          <Col>
            <Card style={{width: '80vw', margin: '0 auto'}}>
              <h1> Envía un mensaje a "{this.state.user.username}"</h1>
              <Comment
                avatar={
                  loggedUser.photo ? (
                    <Avatar size="large" src={loggedUser.photo} />
                  ) : (
                    <Avatar size="large">{loggedUser.username.slice(0, 1).toLocaleUpperCase()}</Avatar>
                  )
                }
                content={
                  <div>
                    <Form.Item>
                      <TextArea rows={4} onChange={this.handleMessageChange} value={this.state.message} />
                    </Form.Item>
                    <Form.Item>
                      <Button htmlType="submit" onClick={this.handleAddComment} type="primary">
                        Enviar Mensaje
                      </Button>
                    </Form.Item>
                  </div>
                }
              />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
