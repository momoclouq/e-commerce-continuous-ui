import React from 'react';
import './App.css';

// default font for MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './router.config';
import defaultTheme from './muiTheme/mui.theme';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <React.Fragment>
      {/* this serves a css global reset */}
      <CssBaseline />

      <ThemeProvider theme={defaultTheme}>
        <ParallaxProvider>
          <RouterProvider router={router} />
        </ParallaxProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
