import React, { Component } from 'react'

class SpreadDemo extends Component {
  render () {
    return (
      <h1>{this.props.name} is a {this.props.style}</h1>
    )
  }
}

export default SpreadDemo;
