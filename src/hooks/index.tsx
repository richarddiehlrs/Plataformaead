import React from 'react';
import { AuthProvider } from './auth';
import { ToastProvider } from './toast';
import { ProgressProvider } from './progress';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>
      <ProgressProvider>
        {children}
      </ProgressProvider>
    </ToastProvider>
  </AuthProvider>
);

export default AppProvider;
