import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@redux/store';
import { CommentScreen } from '@screens/index';
import { HomeTabs } from '@navigation/HomeNavigation';
import { RootStackParamList } from './src/types/rootTypes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName='Home'
              >
                <Stack.Screen
                  name="HomeTab"
                  component={HomeTabs}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen
                  name="Comment"
                  options={{ headerBackTitleVisible: false }}
                  component={CommentScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </StoreProvider>
  );
}