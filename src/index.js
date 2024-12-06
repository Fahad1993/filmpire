import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { Provider } from 'react-redux';
import store from "./app/store";
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </ThemeProvider>
  </Provider>
);
