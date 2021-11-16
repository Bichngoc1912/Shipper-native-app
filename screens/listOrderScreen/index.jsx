import React from 'react';
import { Text, Box } from 'native-base';
import MainHeader from '../../components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HomeTopTab from '../../components/HomeTopTab';

const ListOrderDetailScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <Box paddingTop={inset.top}>
      <MainHeader />
      <HomeTopTab />
    </Box>
  );
};

export default ListOrderDetailScreen;
