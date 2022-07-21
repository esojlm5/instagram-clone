import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ReelsScreen, ShopScreen, SearchScreen, HomeScreen, ProfileScreen } from '../screens';
import { Header } from '../components';
import { HomeIcon, ReelsIcon, SearchIcon, ShopIcon } from '../icons';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
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
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <ShopIcon />,
          tabBarLabel: ''
        }} />
    </Tab.Navigator>
  )
}