import React from 'react';
import { NativeBaseProvider, extendTheme, Box, Text, Spinner } from 'native-base';
import RootNavigation from '@/navigations/RootNavigation';
import ToastAlert from '@/components/ToastAlert';
import * as SplashScreen from 'expo-splash-screen';

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
