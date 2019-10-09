import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Row} from 'antd';

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/background.jpg)',
        backgroundSize: 'cover',
        height: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Row>
        <Col
          md={24}
          span={24}
          style={{
            textAlign: 'center'
          }}
        >
          <span>
            <img
              src="/images/logo.png"
              alt="tunebook logo"
              style={{
                width: '50%',
                height: 'auto',
                padding: '5%'
              }}
            />
          </span>
        </Col>
        <Col offset={4} span={8}>
          <Link to="/signup">
            <Button type="primary">
              <b>Regístrate</b>
            </Button>
          </Link>
        </Col>
        <Col offset={4} span={8}>
          <Link to="Login">
            <Button type="primary">
              <b>Ingresa</b>
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
