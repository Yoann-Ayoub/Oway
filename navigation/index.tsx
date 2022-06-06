/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import LogIn from '../screens/LogIn';
import ModalScreen from '../screens/ModalScreen';
import MyTravel from '../screens/MyTravel';
import NotFoundScreen from '../screens/NotFoundScreen';
import Register from '../screens/Register';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import TravelManager from '../screens/TravelManager';
import Date from '../screens/Date';
import Date2 from '../screens/Date2';
import Houses from '../screens/Houses';
import Activities from '../screens/Activities';
import ActivitiesForm from '../screens/ActivitiesForm';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import HousesForm from '../screens/HousesForm';
import HouseDetail from '../screens/HouseDetail';
import ActivityDetail from '../screens/ActivityDetail';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={TabOneScreen} options={{ headerShown: false }} /> 
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
        <Stack.Screen name="LogIn" component={LogIn} options={{ headerShown: true, title:"Connexion"}}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: true, title:"Inscription"}}/>
        <Stack.Screen name="MyTravel" component={MyTravel} options={{ headerShown: true, title:"Mes Voyages"}} />
        <Stack.Screen name="TravelManager" component={TravelManager} options={{ headerShown: true, title:"Retour"}} />
        <Stack.Screen name="Date" component={Date} options={{ headerShown: true, title:"Choix des dates"}} />
        <Stack.Screen name="Houses" component={Houses} options={{ headerShown: true, title:"Choix du logement"}} />
        <Stack.Screen name="Date2" component={Date2} options={{ headerShown: true, title:"Choix des dates"}} />
        <Stack.Screen name="Houses" component={Houses} options={{ headerShown: true, title:"Choix des dates"}} />
        <Stack.Screen name="Activities" component={Activities} options={{ headerShown: true, title:"Choix des activités"}} />
        <Stack.Screen name="ActivitiesForm" component={ActivitiesForm} options={{ headerShown: true, title:"Nouvelle Activité"}} />
        <Stack.Screen name="HousesForm" component={HousesForm} options={{ headerShown: true, title:"Nouveau Logement"}} />
        <Stack.Screen name="HouseDetail" component={HouseDetail} options={{ headerShown: true, title:"Détail Logement"}} />
        <Stack.Screen name="ActivityDetail" component={ActivityDetail} options={{ headerShown: true, title:"Détail Activité"}} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
