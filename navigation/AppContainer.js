import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import CalendarScreen from '../screens/Calendar/CalendarScreen';

const Navigator = createStackNavigator({
  Calendar: CalendarScreen,
});

export default createAppContainer(Navigator);
