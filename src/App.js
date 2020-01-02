import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, theme, GlobalStyles } from '@theme';

import { Router } from '@router/';
import { storeCreator } from '@store/';

import styles from './App.module.css';
import stylesSass from './App.module.scss';
import './App.css';

const store = storeCreator();

function App() {
  // basename - если мы делаем только один из разделов на сайте на реакт, например dashboard
  // forseRefresh={true} - все переходы будут перезагружать страницу
  return (
    <BrowserRouter /* basename={'/dashboard'} */>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Router />
        </ThemeProvider>
      </Provider>
      <div className={'footer'}>Footer</div>
      <div className={styles.footer}>Footer</div>
      <div className={stylesSass.footer}>Footer</div>
    </BrowserRouter>
  );
}

export default App;
