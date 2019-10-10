import React, {Component} from 'react';
import {Col, Row, Button} from 'antd';

export default class test extends Component {
  render() {
    return (
      <div className="profile-test">
        <Row className="profile-header">
          <h1>Mi perfil</h1>
          <h2>Bienvenid@ "usuario"</h2>
        </Row>
        <Row className="profile-content">
          <Col md={8} className="profile-left">
            <Row className="profile-image">
              <h2>Aqui la imagen</h2>
              <img
                alt="ok"
                src="https://media.gettyimages.com/photos/cellist-tina-guo-performs-with-hans-zimmer-at-the-outdoor-theatre-3-picture-id672086672"
              />
            </Row>
            <Row className="profile-bio">
              <h2>Biografía</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Row>
            <Row className="profile-buttons">
              <Button type="primary">Editar</Button>
              <Button type="primary">Agregar</Button>
            </Row>
          </Col>
          <Col md={16} className="profile-right">
            <Row className="profile-blank">
              <h2>Aqui vacío para dar espacio</h2>
            </Row>
            <Row className="profile-user-data">
              <h2>Aqui los datos de usuario</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Row>
            <Row className="profile-carrousel">
              <h2>Aqui el carrusel</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
