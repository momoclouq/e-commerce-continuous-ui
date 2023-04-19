import React from 'react';
import './App.css';

// default font for MUI
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import router from './router.config';

function App() {
  return (
    <React.Fragment>
      {/* this serves a css global reset */}
      <CssBaseline />

      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
