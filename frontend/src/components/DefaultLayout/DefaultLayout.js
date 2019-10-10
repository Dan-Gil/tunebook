import React from 'react';
import {Route} from 'react-router-dom';
import {Layout, Col, Row, Icon} from 'antd';
import {Link} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './DefaultLayout.scss';

const {Header, Footer, Content} = Layout;

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout style={{minHeight: '100vh'}}>
          <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
            <NavBar {...matchProps} />
          </Header>
          <Layout style={{paddingTop: 65}}>
            <Content>
              <Component {...matchProps} />
            </Content>
          </Layout>
          <Footer className="footer-dark">
            <Row>
              <div className="redes-sociales">
                <div>
                  <Col offset={4} span={4}>
                    <Link to="/">
                      <Icon type="home" style={{color: '#8700a1'}} />
                    </Link>{' '}
                  </Col>
                  <Col span={4}>
                    <a href="https://www.facebook.com" rel="_blank">
                      <Icon type="facebook" style={{color: '#8700a1'}} />
                    </a>{' '}
                  </Col>
                  <Col span={4}>
                    <a href="https://www.instagram.com" rel="_blank">
                      <Icon type="instagram" style={{color: '#8700a1'}} />
                    </a>{' '}
                  </Col>
                  <Col span={4}>
                    <a href="https://www.twitter.com" rel="_blank">
                      <Icon type="twitter" style={{color: '#8700a1'}} />
                    </a>{' '}
                  </Col>
                  <Col span={4}>
                    <a href="https://www.youtube.com" rel="_blank">
                      <Icon type="youtube" style={{color: '#8700a1'}} />
                    </a>{' '}
                  </Col>
                </div>
              </div>
            </Row>
          </Footer>
        </Layout>
      )}
    />
  );
};

export default DefaultLayout;
