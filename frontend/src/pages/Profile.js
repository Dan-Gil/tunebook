import React, {Component} from 'react';
import EditUser from '../components/EditUser/EditUser';
import UserCard from '../components/UserCard/UserCard';
import FileForm from '../components/FileForm/FileForm';
import {Button, Card, Carousel, Col, Modal, Row} from 'antd';
import MY_SERVICE from '../services';

export default class Profile extends Component {
  state = {
    userModalVisible: false,
    fileModalVisible: false,
    user: null,
  };

  componentDidMount() {
    this.loadProfile();
  }

  showUserModal = () => {
    this.setState({
      userModalVisible: true
    });
  };

  showFileModal = () => {
    this.setState({
      fileModalVisible: true
    });
  };

  handleCancel = e => {
    this.setState({
      fileModalVisible: false,
      userModalVisible: false,
    });
  };

  loadProfile = () => {
    MY_SERVICE.getProfile()
      .then(({data}) => {
        this.setState({user: data.user});
      })
      .catch(console.error);
  };

  handleSave = e => {
    this.loadProfile();
    this.setState({
      fileModalVisible: false,
      userModalVisible: false,
    });
  };

  render() {
    if (!this.state.user) {
      return null;
    }
    const images = this.state.user.files
      .filter(file => file.type === 'Imagen');
    return (
      <div>
        <Row>
          <Col
            xl={
              {
                span: 16,
                offset: 4,
              }
            }
            xxl={
              {
                span: 12,
                offset: 6,
              }
            }>
            <Card>
              <h1
                style={{
                  color: '#342c4f'
                }}
              >
                Mi perfil
              </h1>
              <h2>Bienvenid@ "{this.state.user.username}" </h2>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            xl={
              {
                span: 16,
                offset: 4,
              }
            }
            xxl={
              {
                span: 12,
                offset: 6,
              }
            }
          >
            <UserCard user={this.state.user}/>
            <Button type="primary" onClick={this.showUserModal}>
              Edita Tu perfil
            </Button>
            <Modal
              title="Edita tu perfil"
              visible={this.state.userModalVisible}
              onCancel={this.handleCancel}
            >
              <EditUser onSave={this.handleSave} user={this.state.user}/>
            </Modal>
            <Button type="primary" onClick={this.showFileModal}>
              Agrega archivo
            </Button>
            <Modal
              title="Agrega archivo"
              visible={this.state.fileModalVisible}
              onCancel={this.handleCancel}
            >
              <FileForm onSave={this.handleSave}/>
            </Modal>
          </Col>
        </Row>
        <Row>
          <Col
            xl={
              {
                span: 16,
                offset: 4,
              }
            }
            xxl={
              {
                span: 12,
                offset: 6,
              }
            }
          >
            <Card>
              <Carousel
                effect="fade"
                autoplay
              >
                {
                  images
                    .map((file) => (
                    <div key={file._id}>
                      <img src={file.photo} alt={file.name} style={{width: "100%", height: "auto"}}/>
                    </div>
                  ))
                }
              </Carousel>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
