import React, {Component} from 'react';
import {Card, Input, Icon, Form, Button, Select} from 'antd';
import MY_SERVICE from '../../services';

export default class FileForm extends Component {
  state = {
    file: {
      name: '',
      photo: '',
      description: '',
      type: ''
    }
  };

  handleInput = e => {
    const {file} = this.state;
    const key = e.target.name;
    file[key] = e.target.value;
    this.setState({file});
  };

  handleSelect = (name, value) => {
    this.setState({
      file: {
        ...this.state.file,
        [name]: value
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const uploadFile = new FormData();
    uploadFile.set('name', this.state.file.name);
    uploadFile.append('photo', this.state.file.photo);
    uploadFile.append('description', this.state.file.description);
    uploadFile.append('type', this.state.file.type);
    MY_SERVICE.uploadFile(uploadFile)
      .then(() => {
        this.props.onSave();
      })
      .catch(console.error);
  };

  handleUploadFileChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const photo = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: {
          ...this.state.file,
          photo,
          photoPreview: reader.result
        }
      });
    };

    reader.readAsDataURL(photo);
  };

  render() {
    const {Option} = Select;

    return (
      <div className="file-form">
        <Card md={4} offset={8} span={8}>
          <Form onSubmit={this.onSubmit} encType="multipart/form-data">
            <Form.Item label="Nombre del Archivo">
              <Input
                type="text"
                onChange={this.handleInput}
                name="name"
                prefix={<Icon type="file" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Nombre del Archivo"
              />
            </Form.Item>
            <Form.Item label="Descripción">
              <Input
                type="text"
                onChange={this.handleInput}
                name="description"
                prefix={<Icon type="form" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Descripción"
              />
            </Form.Item>
            <Form.Item label="Agrega tus archivos">
              <Input
                type="file"
                onChange={this.handleUploadFileChange}
                name="photo"
                prefix={<Icon type="picture" style={{color: 'rgba(0,0,0,.25)'}} />}
              />
            </Form.Item>
            <Form.Item label="Selecciona el tipo de archivo">
              <Select onChange={this.handleSelect.bind(this, 'type')} placeholder="Selecciona el tipo de archivo">
                <Option value="Imagen">Imagen</Option>
                <Option value="Partitura">Partitura</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Agregar
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}
