import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS_NAME } from '@/constants/screen';
import ListOrderDetailScreen from '@/screens/listOrderScreen';
import HomeNavigator from '@/navigations/HomeNavigator';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={SCREENS_NAME.LIST_ORDER}>
        <RootStack.Screen
          name={SCREENS_NAME.HOME_NAVIGATOR}
          component={HomeNavigator}
        ></RootStack.Screen>

        <RootStack.Screen
          name={SCREENS_NAME.LIST_ORDER}
          component={ListOrderDetailScreen}
        ></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
