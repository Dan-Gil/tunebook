import React, {Component} from 'react';
import {Badge, Icon} from 'antd';
import MY_SERVICE from '../../services';

export default class MessageIcon extends Component {
  state = {
    messages: 0
  };

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    MY_SERVICE.getMessages(true)
      .then(response => {
        this.setState({
          messages: response.data.length
        });
        setTimeout(this.getMessages, 30000);
      })
      .catch(e => {
        // console.error(e);
        setTimeout(this.getMessages, 30000);
      });
  };

  handleIconClick = () => {
    this.setState({
      messages: 0
    });
  };

  render() {
    return (
      <Badge count={this.state.messages}>
        <Icon
          type="mail"
          style={{
            fontSize: '25px',
            color: '#fff'
          }}
          onClick={this.handleIconClick}
        />
      </Badge>
    );
  }
}
