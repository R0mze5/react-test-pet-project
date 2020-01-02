import * as React from 'react';

interface Props {
  children: string;
}

interface State {
  value: string;
}

export class TypescriptClass extends React.Component<Props, State> {
  state = { value: 'asd' };

  componentWillReceiveProps(nextProps: Props) {}

  render() {
    return <p>{this.props.children.replace(/(....)/g, '$1 ')}</p>;
  }
}
