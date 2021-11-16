import React from 'react';
import { Box, Text } from 'native-base';

const WaitForDeliveryTab = () => {
  return (
    <Box
      style={{
        flex: 1,
        backgroundColor: 'yellow',
        height: 1000,
        width: '100%',
      }}
    >
      <Text>{'Chờ giao'}</Text>
    </Box>
  );
};

export default WaitForDeliveryTab;
