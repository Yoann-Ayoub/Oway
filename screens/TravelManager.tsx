import * as React from 'react';
import TabNavigator from '../navigation/TabNavigator';

export default function TravelManager({ navigation, route }){
    return (
        <TabNavigator initialRouteName={route.params.step} />
      );
};