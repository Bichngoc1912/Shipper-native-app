import React from 'react';
import { Box, Text } from 'native-base';
import MainHeader from '@/components/Header';

const WaitForItTab = () => {
  return (
    <Box
      style={{
        backgroundColor: 'red',
        flex: 1,
      }}
    >
      <Text>{'Chờ lấy'}</Text>
    </Box>
  );
};

export default WaitForItTab;
