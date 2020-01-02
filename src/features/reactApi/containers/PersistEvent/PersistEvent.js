import React, { Component } from 'react';

export class PersistEvent extends Component {
  handleClick = e => {
    console.log(e.target);
    console.log(e.nativeEvent); // Proxy

    e.persist();

    setTimeout(() => {
      console.log(e.target);
    }, 1);
  };

  render() {
    return <button onClick={this.handleClick}>Persist event</button>;
  }
}
