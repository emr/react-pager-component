import React, { Component } from 'react';
import Pager from 'react-basic-pager';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 37,
    }
  }
  render() {
    return <Pager
      length={84}
      current={this.state.current}
      expansion={3}
      onChange={current => this.setState({ current })}
    />
  }
}