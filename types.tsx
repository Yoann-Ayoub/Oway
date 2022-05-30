/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
export interface Navigation {
  push: (name: string, params?: { [key: string]: any }) => void
  back: () => void
  reset: () => void
  replace: (name: string, params?: { [key: string]: any }) => void
  navigate: (name: string, params?: { [key: string]: any }) => void
}


export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  LogIn: undefined;
  Register: undefined;
  MyTravel:{ isNewUser: boolean};
  TravelManager:undefined;
  Date:undefined;
  Houses:{house:undefined};
  Activities:{activity:any};
  ActivitiesForm: undefined;
  HousesForm:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  Date: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
