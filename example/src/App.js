import React, { Component } from 'react';
import Pager from 'react-basic-pager';

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 17,
      current: 10,
      expansion: 3,
    }
  }
  handleChange = (current) => {
    this.setState({ current });
  }
  render() {
    const { length, current, expansion } = this.state;
    return <Pager
      {...{ length, current, expansion }}
      onChange={this.handleChange}
    />
  }
}