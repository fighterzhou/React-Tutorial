import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PS extends Component {

  static defaultProps = {
    title: '我是默认标题',
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      title: this.props.title,
    };

    this.click = this.click.bind(this);
  }

  click = () => {
    this.setState({ liked: !this.state.liked, title: 'xxxxx' });
  }

  render() {
    return (
      <div className="alert">
        <div className="title">{this.state.title}</div>
        <div className="content">
          <div>{this.state.liked ? '我很喜欢这个！' : ''}</div>
          <input type="button" onClick={this.click} value="喜欢" />
        </div>
      </div>
    );
  }
}

