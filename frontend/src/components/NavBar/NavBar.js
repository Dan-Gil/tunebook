import React, {Component} from 'react';
import {Avatar, Button, Col, Icon, Menu, Row} from 'antd';
import {Link} from 'react-router-dom';
import './NavBar.scss';
import SearchBar from '../SearchBar/SearchBar';
import MY_SERVICE from '../../services';
import Dropdown from 'antd/es/dropdown';
import MessageIcon from '../MessageIcon/MessageIcon';

export default class NavBar extends Component {
  handleLogout = async e => {
    e.preventDefault();
    await MY_SERVICE.logOut();
    this.props.history.push('/login');
  };

  render() {
    const currentUser = MY_SERVICE.loggedUser();

    return (
      <div className="nav-bar">
        <div className="left">
          <Link to="/profile">
            <img className="logo" src="/images/logo_noname.png" alt="logo" />
          </Link>
        </div>
        {currentUser ? (
          <div className="mid">
            <div className="icons">
              <Link to="/messages">
                <MessageIcon />
              </Link>
            </div>
            <div className="search">
              <SearchBar history={this.props.history} />
            </div>
          </div>
        ) : (
          <div className="mid" />
        )}
        <div className="right">
          {currentUser ? (
            <Row>
              <Col span={8}>
                {currentUser.photo ? (
                  <Avatar size="large" src={currentUser.photo} />
                ) : (
                  <Avatar size="large">{currentUser.username.slice(0, 1).toLocaleUpperCase()}</Avatar>
                )}
              </Col>
              <Col span={16}>
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key="1">
                        <Link to={'/profile'}>Perfil</Link>
                      </Menu.Item>
                      <Menu.Item key="2">
                        <Link to={'/messages'}>Mensajes</Link>
                      </Menu.Item>
                      <Menu.Item key="3">
                        <a href="/logout" onClick={this.handleLogout}>
                          Cerrar sesión
                        </a>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <Button>
                    {currentUser.username} <Icon type="down" />
                  </Button>
                </Dropdown>
              </Col>
            </Row>
          ) : (
            <Menu theme="dark" mode="horizontal" style={{lineHeight: '64px'}}>
              <Menu.Item key="1">
                <Link to={'/signup'}>Regístrate</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'/login'}>Incia Sesión</Link>
              </Menu.Item>
            </Menu>
          )}
        </div>
      </div>
    );
  }
}
