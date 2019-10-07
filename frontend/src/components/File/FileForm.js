import React, { Component } from 'react'
import {Card, Input, Icon, Form, Button, Row, Col} from 'antd';
export default class FileForm extends Component {
  state={
    file:{}
  }

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
    File.create(this.state.file)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/profile');
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div   style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100vw',
        height: '100vh'}}>

                 
    <Card style={{width: '50vw'}}>
    <h2
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2% 0'
          }}
        >
          Añade archivos
        </h2>
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
                    prefix={<Icon type="file" style={{color: 'rgba(0,0,0,.25)'}} />}
                    placeholder="Descripción"
                  />
                </Form.Item>
                <Form.Item label="Agrega tus archivos">
                  <Input
                    type="text"
                    onChange={this.handleInput}
                    name="photo"
                    prefix={<Icon type="picture" style={{color: 'rgba(0,0,0,.25)'}} />}
                    placeholder="Imagen Url"
                  />
                </Form.Item>
                <Form.Item>
                <Button htmlType="submit" type="primary">
                      Agregar
                    </Button>

                </Form.Item>

         </Form>
      </Card>


      
      </div>
    )
  }
}
