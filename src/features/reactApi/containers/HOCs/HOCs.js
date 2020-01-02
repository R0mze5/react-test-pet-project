import React, { Component, PureComponent } from 'react';

// превращаем StateLess компоненту в pure, чтоб при ререндере родителя не происходил rerender потомка

let Stateless = ({ email }) => {
  console.log('render');
  return <p>Stateless</p>;
};

function pure(WrappedComponent) {
  return class extends PureComponent {
    static displayName = 'Pure HOC'; // для отображения имени в React devTools

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

Stateless = pure(Stateless);

export class HOCs extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({ counter: state.counter + 1 }));
    }, 1000);
  }

  render() {
    return <Stateless />;
  }
}
