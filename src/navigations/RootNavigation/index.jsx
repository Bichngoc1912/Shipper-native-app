import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS_NAME } from '@/constants/screen';
import ListOrderDetailScreen from '@/screens/listOrderScreen';
import HomeNavigator from '@/navigations/HomeNavigator';
import DetailOrderWaitingScreen from '@/screens/detailOrderWaitingScreen';
import DetailWaitingForItScreen from '@/screens/detailWaitingForItScreen';
import DetailOrderWaitingDeliveryScreen from '@/screens/detailOrderWatingDeliverySceen';
import DetailOrderDeliverdScreen from '@/screens/detailOrderDeliveredScreen';
import { Host } from 'react-native-portalize';
import LoginScreen from '@/screens/userScreen/loginScreen';
import { useSelector } from 'react-redux';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  const codeLogin = useSelector((state) => state.userAccount.code);

  return (
    <NavigationContainer>
      <Host>
        <RootStack.Navigator
          initialRouteName={codeLogin ? SCREENS_NAME.LIST_ORDER : SCREENS_NAME.LOGIN}
        >
          <RootStack.Screen
            name={SCREENS_NAME.HOME_NAVIGATOR}
            component={HomeNavigator}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.LIST_ORDER}
            component={ListOrderDetailScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.DETAIL_ORDER_WAITING}
            component={DetailOrderWaitingScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.DETAIL_WAITING_FOR_IT}
            component={DetailWaitingForItScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.DETAIL_WAITING_DELIVEY}
            component={DetailOrderWaitingDeliveryScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.DETAIL_DELIVERD}
            component={DetailOrderDeliverdScreen}
          ></RootStack.Screen>

          <RootStack.Screen
            name={SCREENS_NAME.LOGIN}
            component={LoginScreen}
          ></RootStack.Screen>
        </RootStack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default RootNavigation;
