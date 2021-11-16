import React from 'react';
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import ListOrderDetailScreen from './screens/listOrderScreen';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <ListOrderDetailScreen />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
