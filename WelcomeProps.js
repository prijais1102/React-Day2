import React, { Component } from 'react';

export default class welcome extends Component {
  render() {
    return (
      <div>
        Welcome, {this.props.username}
        
      </div>
    )
  }
}
