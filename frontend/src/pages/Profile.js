import React, {Component} from 'react';
import EditUser from '../components/EditUser/EditUser';
import FileForm from '../components/FileForm/FileForm';
import {Button, Avatar, Carousel, Col, Modal, Row} from 'antd';
import MY_SERVICE from '../services';

export default class Profile extends Component {
  state = {
    userModalVisible: false,
    fileModalVisible: false,
    user: null
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
      userModalVisible: false
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
      userModalVisible: false
    });
  };

  render() {
    if (!this.state.user) {
      return null;
    }
    const images = this.state.user.files.filter(file => file.type === 'Imagen');
    return (
      <div className="profile-test">
        <Row className="profile-header">
          <h1>Mi perfil</h1>
          <h2>Bienvenid@ "{this.state.user.username}" </h2>
        </Row>
        <Row className="profile-content">
          <Col md={8} className="profile-left">
            <Row className="profile-image">
              <span className="profile-photo">
                {this.state.user.photo ? (
                  <Avatar size={300} src={this.state.user.photo} />
                ) : (
                  <Avatar size={300}>{this.state.user.username.slice(0, 1).toLocaleUpperCase()}</Avatar>
                )}
              </span>
            </Row>
            <Row className="profile-bio">
              <h2>Biografía</h2>
              <div>
                {this.state.user.biography ? (
                  <p>{this.state.user.biography} </p>
                ) : (
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                )}
              </div>
            </Row>
            <Row className="profile-buttons">
              <Button type="primary" onClick={this.showUserModal}>
                Edita Tu perfil
              </Button>
              <Modal title="Edita tu perfil" visible={this.state.userModalVisible} onCancel={this.handleCancel}>
                <EditUser onSave={this.handleSave} user={this.state.user} />
              </Modal>
              <Button type="primary" onClick={this.showFileModal}>
                Agrega archivo
              </Button>
              <Modal title="Agrega archivo" visible={this.state.fileModalVisible} onCancel={this.handleCancel}>
                <FileForm onSave={this.handleSave} />
              </Modal>
            </Row>
          </Col>
          <Col md={16} className="profile-right">
            <Row className="profile-blank" />
            <Row gutter={16} className="profile-user-data">
              <Col span={8}>
                <Row>
                  <h4>Nombre: </h4>
                  <b>
                    {' '}
                    <span>{this.state.user.name}</span>
                  </b>
                </Row>
                <Row>
                  <h4>Apellido: </h4>
                  <b>
                    {' '}
                    <span>{this.state.user.lastName}</span>
                  </b>
                </Row>
                <Row>
                  <h4>Corre Electrónico: </h4>
                  <b>
                    <span>{this.state.user.email}</span>
                  </b>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <h4>Géneros:</h4>
                  <b>
                    <ul>
                      {this.state.user.genres.map(genre => (
                        <li key={genre._id}>{genre.name}</li>
                      ))}
                    </ul>
                  </b>
                </Row>
              </Col>
              <Col span={8}>
                <Row>
                  <h4>Instrumentos:</h4>
                  <b>
                    <ul>
                      {this.state.user.instruments.map(instrument => (
                        <li key={instrument._id}>{instrument.name}</li>
                      ))}
                    </ul>
                  </b>
                </Row>
              </Col>
            </Row>
            <Row className="profile-carrousel">
              <Carousel effect="fade" autoplay>
                {images.map(file => (
                  <div key={file._id}>
                    <img
                      src={file.photo}
                      alt={file.name}
                      style={{width: '100%', height: '300px', objectFit: 'cover', borderRadius: '20px'}}
                    />
                  </div>
                ))}
              </Carousel>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
