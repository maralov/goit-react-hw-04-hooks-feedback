import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@emotion/react';

import theme from './theme';
import 'antd/dist/antd.css';
import './index.css';
import App from 'components/App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
