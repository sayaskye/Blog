import React from 'react'
import Routes from "./routes";
import { HelmetProvider } from 'react-helmet-async';

function App() {

  return (
    <HelmetProvider>
      <Routes />
    </HelmetProvider>
  )
}

export default App
