import React, { Component, PureComponent } from 'react';

export class ForwardedRef extends Component {
  greeting = React.createRef();
  // в red также попадает ссылка на экземпляр объекта класса, т.е мы можем видеть методы этой компоненты

  componentDidMount() {
    setTimeout(() => {
      // console.log(this.greeting.current);

      if (this.greeting.current) {
        this.greeting.current.toUpperCase();
      }
    }, 3000);
  }

  render() {
    // console.log(this.greeting);
    return <PureGreeting ref={this.greeting} name={'someName'} />;
  }
}

class Greeting extends Component {
  state = {
    isUpper: false,
  };

  toUpperCase = () => {
    this.setState({ isUpper: true });
  };

  render() {
    const { isUpper } = this.state;
    const { name } = this.props;

    return (
      <p>
        {isUpper ? 'HELLO' : 'hello'}, {name}
      </p>
    );
  }
}

const PureGreeting = pure(Greeting);

function pure(WrappedComponent) {
  // HOC для ref
  class PuredComponent extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} ref={this.props.forwardRef} />;
    }
  }

  return React.forwardRef((props, ref) => <PuredComponent {...props} forwardRef={ref} />);
}
