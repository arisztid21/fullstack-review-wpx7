import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import { AppContainer } from 'react-hot-loader';

const render = () => {
    ReactDOM.render(
      // Wrap App inside AppContainer
      <AppContainer>
            <App />
      </AppContainer>,
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
  