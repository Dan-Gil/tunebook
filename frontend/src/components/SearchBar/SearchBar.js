import React, {Component} from "react";

import {Icon, Select, Row, Col, Avatar} from 'antd';
import MY_SERVICE from "../../services";

import './SearchBar.scss';
const {Option} = Select;

export default class SearchBar extends Component {

  state = {
    data: [],
  };

  handleSearch = (value) => {
    if (value) {
      MY_SERVICE.findUsersByName(value, null, 10)
        .then(({data}) => {
          this.setState({
            data
          })
        })
        .catch(console.error);
    }

  };

  handleBlur = () => {
    this.setState({
      data: [],
    })
  };

  handleSelect = (value) => {
    this.props.history.push(`/user/${value}`);
  };

  render() {
    const options = this.state.data.map(d => <Option key={d._id}>
      <Row
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Col span={2}>
          {
            d.photo ?
              <Avatar size="large" src={d.photo} /> :
              <Avatar size="large">{d.username.slice(0, 1).toLocaleUpperCase()}</Avatar>
          }
        </Col>
        <Col span={22}>
          {d.name} {d.lastName}
        </Col>
      </Row>
    </Option>);
    return (
      <div className="search-bar">
        <Select
          showSearch
          defaultActiveFirstOption={false}
          filterOption={false}
          notFoundContent={null}
          suffixIcon={<Icon type="search"/>}
          style={{
            width: '100%',
            maxWidth: '600px',
          }}
          onSearch={this.handleSearch}
          onBlur={this.handleBlur}
          onSelect={this.handleSelect}
        >
          {options}
        </Select>
      </div>
    );
  }
}