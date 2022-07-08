
import { StyleSheet, SafeAreaView, Button, Text, View, FlatList } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { faker } from '@faker-js/faker';

import { decrement, increment } from '../redux/counter/counterSlice'
import { Props } from "../types/rootTypes";
import { ListStories } from '../components'

import type { RootState } from '../redux/store';

const HomeScreen = ({ navigation }: Props) => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      image: faker.image.avatar()
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      image: faker.image.avatar()
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
      image: faker.image.avatar()
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d42',
      title: 'Fourth Item',
      image: faker.image.avatar()
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d2323',
      title: 'Fourth Item',
      image: faker.image.avatar()
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d22',
      title: 'Fourth Item',
      image: faker.image.avatar()
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={({ item }) => <ListStories image={item.image} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View style={styles.content}>
        <Text>Home Screen changed</Text>
        <Button
          title="Go to Reels"
          onPress={() => navigation.navigate('Reels')}
        />
        <Button title="Increment" onPress={() => dispatch(increment())} />
        <Text>{count}</Text>
        <Button title="Decrement" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    marginTop: 20
  }
})
export default HomeScreen;