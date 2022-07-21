import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  HomeTab: undefined,
  Home: undefined;
  Details: undefined;
  Profile: undefined;
  Reels: undefined;
  Comment: undefined;
}

export type navigationParamListt = {
  push: Function;
}

export type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;