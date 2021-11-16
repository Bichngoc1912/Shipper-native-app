import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SCREENS_NAME } from '@/constants/screen';
import HomeNavigator from '@/navigations/HomeNavigator';

const RootStack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={SCREENS_NAME.HOME_NAVIGATOR}
          component={HomeNavigator}
        ></RootStack.Screen>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
