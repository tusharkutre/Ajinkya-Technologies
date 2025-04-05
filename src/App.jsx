import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/Routers';
import MuiThemeProvider from './MuiThemeProvider';

function App() {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;