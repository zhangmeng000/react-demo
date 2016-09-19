import React, { Component } from 'react';

class HandleEvent extends Component {

  state = { liked: true }

  handleClick = (event) => {
    this.setState({liked: !this.state.liked});
  }

  render() {
    let text = this.state.liked ? '喜欢' : '不喜欢';

    return (
      <p onClick={this.handleClick}>
        点击我：我 {text} 你.
      </p>
    );
  }
}

export default HandleEvent;
