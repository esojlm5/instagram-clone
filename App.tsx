import { StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StorePovider } from 'react-redux';

import { Header } from './components';


import { store } from './redux/store';

import { ReelsScreen, ShopScreen, SearchScreen, HomeScreen } from './screens';
import { HomeIcon, ReelsIcon, SearchIcon, ShopIcon } from './icons';

// const RootStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StorePovider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName='Home'
              screenOptions={{
                tabBarStyle: {
                  paddingTop: 16,
                  paddingBottom: 10,
                }
              }}
            >
              <Tab.Screen
                name='Home'
                component={HomeScreen}
                options={{
                  header: () => <Header />,
                  tabBarIcon: () => <HomeIcon />,
                  tabBarLabel: ''
                }} />
              <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{
                  tabBarIcon: () => <SearchIcon />,
                  tabBarLabel: ''
                }} />
              <Tab.Screen
                name='Reels'
                component={ReelsScreen}
                options={{
                  tabBarIcon: () => <ReelsIcon />,
                  tabBarLabel: ''
                }} />
              <Tab.Screen
                name='Shop'
                component={ShopScreen}
                options={{
                  tabBarIcon: () => <ShopIcon />,
                  tabBarLabel: ''
                }} />
            </Tab.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
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
