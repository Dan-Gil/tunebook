import React from 'react';
import {Route} from 'react-router-dom';
import {Layout, Menu, Col, Row, Icon} from 'antd';
import {Link} from 'react-router-dom';

const {Header, Footer, Content} = Layout;

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout style={{minHeight: '100vh'}}>
          <Header>
            <Link to="/dashboard">
              <img className="logo" src="/images/logo_noname.png" alt="logo" />
            </Link>
            <Menu theme="dark" mode="horizontal" style={{lineHeight: '64px'}}>
              <Menu.Item key="1">
                <Link to={'/signup'}>Regístrate</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to={'/login'}>Incia Sesión</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Layout>
            <Content>
              <Component {...matchProps} />
            </Content>
          </Layout>
          <Footer>
            <Row>
              <div className="redes-sociales">
                <div className="ok">
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
