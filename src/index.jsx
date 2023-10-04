import React from 'react';
import { extendTheme, ColorModeScript, ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration.js";
import App from './App';
import { theme } from './chakra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

// reportWebVitals();
serviceWorkerRegistration.register();