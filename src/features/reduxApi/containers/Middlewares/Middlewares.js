import React, { Component } from 'react';

export class Middlewares extends Component {
  componentDidMount() {
    this.props.getSeriesRequest();
  }

  render() {
    const { isLoading, error, series } = this.props;

    if (isLoading) {
      return <p>is Loading </p>;
    }
    if (error) {
      return <p>error </p>;
    }

    return <div>{series && series.map(ep => <div key={ep.id}>{ep.name}</div>)}</div>;
  }
}

export default Middlewares;
