import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';


import Date from '../../screens/Date';
import Houses from '../../screens/Houses';
import Activities from '../../screens/Activities';

const Tab = createBottomTabNavigator();

const TabNavigator = (props) => {
  return (
    <Tab.Navigator
    initialRouteName={props.initialRouteName}
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarHideOnKeyboard: true,
            headerShown: false,
          }}
    >

      <Tab.Screen name="Date" component={Date}
          options={{
                    tabBarLabel: 'Dates',
                    tabBarLabelPosition:'below-icon',
                    tabBarIcon: ({ color, size }) => (
                      <Image source={require('../../screens/images/calendar.png')} style={{height:30, width:30}}/>
                    ),
                  }}
      />
      <Tab.Screen name="Houses" component={Houses}
      options={{
                          tabBarLabel: 'Logement',
                          tabBarLabelPosition:'below-icon',
                          tabBarIcon: ({ color, size }) => (
                            <Image source={require('../../screens/images/home.png')} style={{height:30, width:30}}/>
                          ),
                        }}
      />
      <Tab.Screen name="Activities" component={Activities}
      options={{
                          tabBarLabel: 'Activités',
                          tabBarLabelPosition:'below-icon',
                          tabBarIcon: ({ color, size }) => (
                            <Image source={require('../../screens/images/activities.png')} style={{height:30, width:30}}/>
                          ),
                        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;