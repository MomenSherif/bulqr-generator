import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
import { registerSW } from 'virtual:pwa-register';

import App from './App';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};
const theme = extendTheme({
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  config,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

registerSW({
  onOfflineReady() {},
});
