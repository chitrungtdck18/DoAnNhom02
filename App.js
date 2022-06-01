import React, { useEffect } from 'react';
import Navigation from './src/Routing/Navigation'
import { AuthProvider } from './src/Redux/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};


