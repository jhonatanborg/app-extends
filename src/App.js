import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';
// import { ColorModeSwitcher } from './ColorModeSwitcher';
// import { Logo } from './Logo';
import AppRoutes from './router';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
