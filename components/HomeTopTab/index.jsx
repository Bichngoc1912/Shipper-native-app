import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WaitForItTab from '../../screens/listOrderScreen/waitForItTab';
import WaitForDeliveryTab from '../../screens/listOrderScreen/waitForDeliveryTab';
import DeliveredTab from '../../screens/listOrderScreen/deliveredTab';
import ReturnGoodTab from '../../screens/listOrderScreen/returnsGoodTab';
import { Box } from 'native-base';

const Tab = createMaterialTopTabNavigator();

const HomeTopTab = () => {
  return (
    <Box
      style={{
        backgroundColor: 'blue',
        height: 50,
      }}
    >
      <Tab.Navigator>
        <Tab.Screen name="Chờ lấy" component={WaitForItTab} />
        <Tab.Screen name="Chờ giao" component={WaitForDeliveryTab} />
        <Tab.Screen name="Đã giao" component={DeliveredTab} />
        <Tab.Screen name="Trả lại" component={ReturnGoodTab} />
      </Tab.Navigator>
    </Box>
  );
};

export default HomeTopTab;
