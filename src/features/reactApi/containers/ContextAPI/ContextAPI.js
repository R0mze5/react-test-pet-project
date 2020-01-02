import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext('light'); // ожидает  дефолтное значение контекста

export class ContextAPI extends Component {
  state = {
    theme: 'light',
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => {
        return state.theme === 'light' ? { theme: 'dark' } : { theme: 'light' };
      });
    }, 1000);
  }

  render() {
    return (
      <Provider value={this.state.theme}>
        <IntermediateComponent>
          <ThemedButton />
        </IntermediateComponent>
      </Provider>
    );
  }
}

const IntermediateComponent = ({ children }) => {
  return <div>{children}</div>;
};

const ThemedButton = () => {
  // Consumer использует технику childRenderProp
  return (
    <Consumer>
      {theme => (
        <button style={{ backgroundColor: theme === 'light' ? '#fff' : 'tomato' }}>
          кнопка с темой
        </button>
      )}
    </Consumer>
  );
};

// function withTheme(WrappedComponent) {
//   return class extends Component {
//     render() {
//       return (
//         <Consumer>
//         {theme => (
//           <WrappedComponent {...this.props} theme={theme}></WrappedComponent>
//         )}
//         </Consumer>
//       )
//     }
//   }
// }

// const Button = ({theme}) => {
//   return (
//     <button style={{backgroundColor: theme === 'light' ? '#fff' : 'tomato'}}>кнопка с темой</button>
//   )
// }

// const ThemedButton = withTheme(Button)
