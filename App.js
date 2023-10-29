import React, { useEffect } from 'react';
import Navigation from './src/Routing/Navigation'
import { AuthProvider } from './src/Redux/AuthContext';
import { NotificationLister, requestUserPermission, getfmcToken } from './src/Utils/pushNotificationhelper.js'

export default function App() {
  useEffect(() => {
    requestUserPermission()
    getfmcToken()
    NotificationLister()
  },[])
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>

  );
};


