import React from "react";
import {Route} from "react-router-dom";
import {Layout, Menu} from "antd";

const {Header, Footer, Sider, Content} = Layout;

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={matchProps => (
            <Layout style={{minHeight: '100vh'}}>
                <Header>
                    <img className="logo" src="logo.png" alt=""/>
                    <Menu
                      theme="dark"
                      mode="horizontal"
                      style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Sign Up</Menu.Item>
                        <Menu.Item key="2">Login</Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Content>
                        <Component {...matchProps} />
                    </Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        )}/>
    )
};

export default DefaultLayout;