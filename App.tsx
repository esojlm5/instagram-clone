import { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StorePovider } from 'react-redux';
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
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <StorePovider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <PaperProvider>
            <NavigationContainer>
              <Stack.Navigator
                initialRouteName='Home'
              // screenOptions={{
              //   tabBarStyle: {
              //     paddingTop: 16,
              //     paddingBottom: 10,
              //   }
              // }}
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
                  // options={{
                  //   headerShown: false
                  // }}
                  component={CommentScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </PaperProvider>
        </SafeAreaProvider>
      </PersistGate>
    </StorePovider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabContainer: {
    paddingTop: 20
  }
});
