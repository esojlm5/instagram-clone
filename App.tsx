import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector, useDispatch, Provider } from 'react-redux';

import type { RootState } from './redux/store';
import { decrement, increment } from './redux/counter/counterSlice'


import { RootStackParamList, Props } from "./types/rootTypes";
import { store } from './redux/store';

import { DetailsScreen } from './screens';

const HomeScreen = ({ navigation }: Props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Button title="Increment" onPress={() => dispatch(increment())}/>
      <Text>{count}</Text>
      <Button title="Decrement" onPress={() => dispatch(decrement())}/>
    </View>
  );
}

const RootStack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="Details" component={DetailsScreen}/>
      </RootStack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
