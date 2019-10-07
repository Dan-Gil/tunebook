import React from 'react';
import {Link} from 'react-router-dom';
import {Button, Col, Row} from 'antd';

export default function Home() {
  return (
    <div>
      <Row
      // type="flex"
      // style={{
      //   justifyContent: 'center',
      //   alignItems: 'center'
      // }}
      >
        <div>
          <Col offset={4} span={8}>
            <Row>
              <Col span={24}>
                <h1>Bienvenido a TuneBook</h1>
              </Col>
              <Col span={24}>
                <h3>Comenzemos! </h3>
              </Col>
              <Col span={24}>
                <div>
                  <Link to="/signup">
                    <Button type="primary">
                      <b>Sign up</b>
                    </Button>
                  </Link>
                  <Link to="Login">
                    <Button type="primary">
                      <b> Log in</b>
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>{' '}
        </div>

        <Col span={8}>
          {/* <Row
              type="flex"
              style={{
                justifyContent: 'center',
                alignItems: 'center'
              }}
            > */}
          <Col span={24}>
            <img
              src="https://ak5.picdn.net/shutterstock/videos/1739485/thumb/1.jpg"
              alt="algo"
              style={{
                width: '350px'
              }}
            />
          </Col>
          <Col span={24}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat laboriosam aspernatur hic repellat,
              animi ad quod assumenda beatae corporis placeat explicabo modi earum, magnam tempora libero alias
              adipisci! Quaerat, blanditiis?
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
}
