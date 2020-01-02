import React, { Component } from 'react';

// // Можно использовать, как замену HOC

// function WithWindowSizeHOC(WrappedComponent) {
//   return class  extends Component {

//     static displayName = 'WithWindowSize'

//     state={
//       width: window.innerWidth
//     }

//     componentDidMount() {
//       window.addEventListener('resize', this.onResize)
//     }

//     componentWillUnmount() {
//       window.removeEventListener('resize', this.onResize)
//     }

//     onResize = () => {
//       this.setState({width: window.innerWidth })
//     }

//     render() {

//       const {width} = this.state

//       return  React.createElement(WrappedComponent, {...this.props, width} )

//     }
//   }
// }

// const P = ({width}) => <p>{width}</p>

// const PWithOC = WithWindowSizeHOC(P)

// т.е. в отличии от HOC, в renderProps не нужно декорировать переменную

class WithWindowSize extends Component {
  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;

    const { render } = this.props;

    return render({ width });
  }
}

export const RenderProps = () => (
  <div>
    <h1>Ширина окна</h1>
    <WithWindowSize render={({ width }) => <p>{width}</p>} />
  </div>
);
