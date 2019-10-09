import React, {Component} from 'react';
import MY_SERVICE from '../services/index';
import {Avatar, Button, Comment, Form, Input, Col, Row} from 'antd';

const {TextArea} = Input;

class User extends Component {
  state = {
    user: null,
    message: ''
  };

  componentDidMount() {
    MY_SERVICE.getUser(this.props.match.params.id).then(response => {
      this.setState({
        user: response.data
      });
    });
  }

  handleClick = e => {
    e.preventDefault();
    MY_SERVICE.sendMessage(this.state.user._id, this.state.message)
      .then(console.log)
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

    return (
      <div>
        <Row>
          <Col offset={4} span={16}>
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
                    <Button htmlType="submit" onClick={this.handleClick} type="primary">
                      Add Comment
                    </Button>
                  </Form.Item>
                </div>
              }
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default User;
