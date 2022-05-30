import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Date from '../../screens/Date';
import Houses from '../../screens/Houses';
import Activities from '../../screens/Activities';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Date" component={Date} />
      <Tab.Screen name="Houses" component={Houses} />
      <Tab.Screen name="Activities" component={Activities} />
    </Tab.Navigator>
  );
};

export default TabNavigator;