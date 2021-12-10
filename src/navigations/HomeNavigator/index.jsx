import React, { useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import WaitForItTab from '@/screens/listOrderScreen/waitForItTab';
import WaitForDeliveryTab from '@/screens/listOrderScreen/waitForDeliveryTab';
import DeliveredTab from '@/screens/listOrderScreen/deliveredTab';
import ReturnGoodTab from '@/screens/listOrderScreen/returnsGoodTab';
import { Box } from 'native-base';
import { SCREENS_NAME } from '@/constants/screen';
import { colorPalletter } from '@/assets/theme/color';

const Tab = createMaterialTopTabNavigator();

const HomeNavigator = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.navigate({ name: SCREENS_NAME.LOGIN });
  }, []);

  return (
    <Box
      style={{
        backgroundColor: 'blue',
        height: '100%',
      }}
    >
      <Tab.Navigator
        screenOptions={{
          tabBarPressColor: colorPalletter.lime[600],
          tabBarActiveTintColor: colorPalletter.lime[600],
          tabBarInactiveTintColor: '#000',
          tabBarIndicatorStyle: {
            backgroundColor: colorPalletter.lime[600],
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
