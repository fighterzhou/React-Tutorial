import React, { Component } from 'react';
import ReactDOM from 'react-dom';
export default class Life extends Component {
  static defaultProps = {
    title: '我是默认标题',
  };

  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
    this.click = this.click.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  click() {
    this.setState({ liked: !this.state.liked });
    alert(this.refs['text'].innerHTML);
  }

  render() {
    return(
      <div className="alert">
        <div className="title" ref="text">{this.props.title}</div>
        <div className="content">
          <div>{this.state.liked ? '我很喜欢这个！' : ''}</div>
          <input type="button" onClick={this.click} value="喜欢" />
        </div>
      </div>
    );
  }

  // render() {
  //   let arr = [1, 2, 3, 3, 4];
  //   return (
  //     <div>
  //       <ul>
  //         {
  //           arr.map((i, idx) => <li key={idx}>{i}</li>)
  //         }
  //       </ul>
  //     </div>
  //   );
  // }
}

