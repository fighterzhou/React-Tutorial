import React, { Component } from 'react';
export default class MyForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '动态组件!',
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <input type="text" value="受限组件" /><br />
        <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
        <input type="text" placeholder="不受限组件" /><br />
        <input type="text" defaultValue="默认值组件" /><br />
      </div>
    );
  }
}

