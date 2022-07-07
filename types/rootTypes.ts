import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: undefined;
    Details: undefined;
    Profile: undefined;
    Reels: undefined;
}

export type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;