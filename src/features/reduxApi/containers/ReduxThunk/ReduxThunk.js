import React, { PureComponent } from 'react';

export class ReduxThunk extends PureComponent {
  componentDidMount() {
    const { forThunk } = this.props;
    forThunk();
  }

  render() {
    return <div>ReduxThunk</div>;
  }
}

export default ReduxThunk;
