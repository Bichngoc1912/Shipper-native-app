import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS_NAME } from '@/constants/screen';
import ListOrderDetailScreen from '@/screens/listOrderScreen';
import HomeNavigator from '@/navigations/HomeNavigator';
import DetailOrderWaitingScreen from '@/screens/detailOrderWaitingScreen';
import DetailWaitingForItScreen from '@/screens/detailWaitingForItScreen';
import DetailOrderWaitingDeliveryScreen from '@/screens/detailOrderWatingDeliverySceen';
import DetailOrderDeliverdScreen from '@/screens/detailOrderDeliveredScreen';
import { Host, Portal } from 'react-native-portalize';
import { getTokenFromStore } from '@/helper/tokenHelpers';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  useEffect(() => {
    (async () => {
      const test = await getTokenFromStore();

      console.log('test', test);
    })();
  }, []);

  return (
    <NavigationContainer>
      <Host>
        <RootStack.Navigator initialRouteName={SCREENS_NAME.LIST_ORDER}>
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
        </RootStack.Navigator>
      </Host>
    </NavigationContainer>
  );
};

export default RootNavigation;
