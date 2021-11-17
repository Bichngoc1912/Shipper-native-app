import React from 'react';
import { Text, Box } from 'native-base';
import MainHeader from '@/components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeNavigator from '@/navigations/HomeNavigator';
const ListOrderDetailScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <Box>
      <HomeNavigator />
    </Box>
  );
};

export default ListOrderDetailScreen;
