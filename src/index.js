import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import {Provider} from 'react-redux'
// import registerServiceWorker from './registerServiceWorker';

import { AppContainer } from 'react-hot-loader';

const render = () => {
    ReactDOM.render(
      // Wrap App inside AppContainer
      <Provider store={store}>
      <BrowserRouter>
      <AppContainer>
            <App />
      </AppContainer>
      </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  };
  
  // Render once
  render();
  
  // Webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./App', () => {
      render();
    });
  }
  