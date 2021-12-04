import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import RootNavigation from '@/navigations/RootNavigation';
import ToastAlert from '@/components/ToastAlert';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigation></RootNavigation>
      <ToastAlert></ToastAlert>
    </NativeBaseProvider>
  );
}
