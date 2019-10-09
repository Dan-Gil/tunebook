import React, {Component} from 'react';
import {Button, Form, Icon, Input, Card, Select} from 'antd';
import MY_SERVICE from '../../services';

const {Option} = Select;

class EditUser extends Component {
  state = {
    user: {
      email: '',
      name: '',
      lastName: '',
      genres: [],
      instruments: [],
      bio: '',
      location: '',
      biography: '',
      musicReading: '',
      influences: []
    },
    instruments: [],
    genres: []
  };

  componentDidMount() {
    this.loadInstruments();
    this.loadGenres();
    this.setState({
      user: {
        ...this.state.user,
        instruments: MY_SERVICE.loggedUser().instruments,
        genres: MY_SERVICE.loggedUser().genres
      }
    });
  }

  handleInput = e => {
    const {user} = this.state;
    const key = e.target.name;
    user[key] = e.target.value;
    this.setState({user});
  };

  onSubmit = e => {
    e.preventDefault();

    const data = Object.entries(this.state.user).reduce((res, [key, value]) => {
      if (value && value.length > 0) {
        res[key] = value;
      }
      return res;
    }, {});

    MY_SERVICE.edit(data)
      .then(response => {
        MY_SERVICE.logUser({
          ...MY_SERVICE.loggedUser(),
          ...data
        });
      })
      .catch(console.error);
  };

  loadInstruments = () => {
    MY_SERVICE.getInstruments()
      .then(({data}) => {
        this.setState({
          instruments: data
        });
      })
      .catch(console.error);
  };

  handleInstrumentChange = value => {
    this.setState({
      user: {
        ...this.state.user,
        instruments: value
      }
    });
  };

  loadGenres = () => {
    MY_SERVICE.getGenres()
      .then(({data}) => {
        this.setState({
          genres: data
        });
      })
      .catch(console.error);
  };

  handleGenresChange = value => {
    this.setState({
      user: {
        ...this.state.user,
        genres: value
      }
    });
  };

  render() {
    // console.log(this.state)
    const loggedUser = MY_SERVICE.loggedUser();
    const instruments = this.state.instruments.map(d => <Option key={d._id}>{d.name}</Option>);
    const genres = this.state.genres.map(d => <Option key={d._id}>{d.name}</Option>);

    return (
      <div>
        <Card md={4} offset={8} span={8}>
          <h1
            style={{
              color: '#342c4f'
            }}
          >
            Edita tu perfil
          </h1>

          <Form onSubmit={this.onSubmit}>
            <Form.Item label="Nombre">
              <Input
                type="text"
                onChange={this.handleInput}
                name="name"
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder={loggedUser.name}
              />
            </Form.Item>
            <Form.Item label="Apellido">
              <Input
                type="text"
                onChange={this.handleInput}
                name="lastName"
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder={loggedUser.lastName}
              />
            </Form.Item>
            <Form.Item label="Correo Electrónico">
              <Input
                type="email"
                onChange={this.handleInput}
                name="email"
                prefix={<Icon type="mail" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder={loggedUser.email}
              />
            </Form.Item>
            <Form.Item label="Foto de Perfil">
              <Input
                type="text"
                onChange={this.handleInput}
                name="photo"
                prefix={<Icon type="picture" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Imagen Url"
              />
            </Form.Item>
            <Form.Item label="Selecciona Instrumentos">
              <Select
                showSearch
                mode="multiple"
                defaultActiveFirstOption={false}
                filterOption={false}
                onChange={this.handleInstrumentChange}
                notFoundContent={null}
                value={this.state.user.instruments}
              >
                {instruments}
              </Select>
            </Form.Item>
            <Form.Item label="Géneros">
              <Select
                showSearch
                mode="multiple"
                defaultActiveFirstOption={false}
                filterOption={false}
                onChange={this.handleGenresChange}
                notFoundContent={null}
                value={this.state.user.genres}
              >
                {genres}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Actualiza
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    );
  }
}

export default EditUser;
