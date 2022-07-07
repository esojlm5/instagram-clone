import { Button, StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useSelector, useDispatch, Provider as StorePovider } from 'react-redux';

import type { RootState } from './redux/store';
import { decrement, increment } from './redux/counter/counterSlice'
import { Header } from './components';


import { Props } from "./types/rootTypes";
import { store } from './redux/store';

import { ReelsScreen, ShopScreen, SearchScreen } from './screens';
import { HomeIcon, ReelsIcon, SearchIcon, ShopIcon } from './icons';

const HomeScreen = ({ navigation }: Props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Reels"
        onPress={() => navigation.navigate('Reels')}
      />
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Text>{count}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </View>
  );
}

// const RootStack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StorePovider store={store}>
      <SafeAreaProvider>
        <PaperProvider>
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Home"
              screenOptions={{
                tabBarStyle: {
                  paddingTop: 20,
                  marginBottom: 10
                }
              }}
            >
              <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  header: () => <Header />,
                  tabBarIcon: () => <HomeIcon />,
                  tabBarLabel: ''
                }} />
              <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                  tabBarIcon: () => <SearchIcon />,
                  tabBarLabel: ''
                }} />
              <Tab.Screen
                name="Reels"
                component={ReelsScreen}
                options={{
                  tabBarIcon: () => <ReelsIcon />,
                  tabBarLabel: ''
                }} />
              <Tab.Screen
                name="Shop"
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabContainer: {
    paddingTop: 20
  }
});
