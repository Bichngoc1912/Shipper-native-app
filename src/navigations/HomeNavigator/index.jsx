import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WaitForItTab from '@/screens/listOrderScreen/waitForItTab';
import WaitForDeliveryTab from '@/screens/listOrderScreen/waitForDeliveryTab';
import DeliveredTab from '@/screens/listOrderScreen/deliveredTab';
import ReturnGoodTab from '@/screens/listOrderScreen/returnsGoodTab';
import { Box, Text } from 'native-base';

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  return (
    <Box
      style={{
        backgroundColor: 'blue',
        height: '100%',
      }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarPressColor: '#65A30D',
          tabBarActiveTintColor: '#65A30D',
          tabBarInactiveTintColor: '#000',
          tabBarIndicatorStyle: {
            backgroundColor: '#65A30D',
          },
        }}
      >
        <Tab.Screen name="Chờ lấy" component={WaitForItTab} />
        <Tab.Screen name="Chờ giao" component={WaitForDeliveryTab} />
        <Tab.Screen name="Đã giao" component={DeliveredTab} />
        <Tab.Screen name="Trả lại" component={ReturnGoodTab} />
      </Tab.Navigator>
    </Box>
  );
};

export default HomeNavigator;
