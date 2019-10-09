import React, {Component} from 'react';
import MY_SERVICE from '../services';
import {Avatar, Card, Col, Comment, Row} from 'antd';
import moment from 'moment';
import {Link} from 'react-router-dom';
export default class Message extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    this.loadMessages();
  }

  loadMessages() {
    MY_SERVICE.getMessages()
      .then(({data}) => {
        this.setState({
          messages: data
        });
        return MY_SERVICE.markMessagesRead();
      })
      .then(console.log)
      .catch(console.error);
  }

  render() {
    const {messages} = this.state;
    return (
      <div className="messages-form">
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
              {messages.map(item => (
                <Comment
                  key={item.from.name}
                  className="messages-card"
                  actions={[<span key={`delete-${item._id}`}>Delete</span>]}
                  author={item.from.username}
                  content={item.message}
                  datetime={moment().to(item.createdAt)}
                  avatar={
                    <Link to={`/user/${item.from._id}`}>
                      {item.from.photo ? (
                        <Avatar size="large" src={item.from.photo} />
                      ) : (
                        <Avatar size="large">{item.from.username.slice(0, 1).toLocaleUpperCase()}</Avatar>
                      )}
                    </Link>
                  }
                />
              ))}
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
