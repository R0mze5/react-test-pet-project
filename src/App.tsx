import React, { PureComponent } from 'react';

import Grid from '@material-ui/core/Grid';

import { BrowserRouter /* , useHistory */ } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ThemeProvider, theme, GlobalStyles } from '@theme';

import { Router } from '@router';
import { storeCreator } from '@store/';

// import * as immutable from '@utils/immutable';
import * as generic from '@utils/typescript/decorators';
console.log(generic);

const store = storeCreator();

export class App extends PureComponent {
  // constructor(props) {
  //   super(props);

  //   // window.onerror = function(e) {
  //   //   console.log(e);
  //   //   // ("TestError: Hello world", window.location.href)
  //   // }; // всё, кроме Promise

  //   window.onerror('TestError: Hello world', window.location.href);

  //   window.addEventListener('unhandledrejection', e => console.log(e));
  // }

  throwError = () => {
    throw new Error('some Error');
  };

  throwPromiseError = () => {
    return new Promise((_resolve, reject) => {
      setTimeout(() => {
        reject('some Promise Error');
      }, 300);
    });
  };

  render() {
    // const history = useHistory();

    // basename - если мы делаем только один из разделов на сайте на реакт, например dashboard
    // forseRefresh={true} - все переходы будут перезагружать страницу
    return (
      <Grid container spacing={2}>
        <BrowserRouter /* basename={'/dashboard'} */>
          <Grid item xs={12}>
            <Provider store={store}>
              <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Router />
              </ThemeProvider>
            </Provider>
          </Grid>
          <Grid item xs={12}>
            <button type={'button'} onClick={this.throwError}>
              error
            </button>
            <button type={'button'} onClick={this.throwPromiseError}>
              async error
            </button>
            {/* <button type={'button'} onClick={() => history.push('/')}>
              go home
            </button> */}
          </Grid>
        </BrowserRouter>
      </Grid>
    );
  }
}

export default App;
