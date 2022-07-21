
import { StyleSheet, SafeAreaView, View, FlatList, ScrollView } from "react-native";
import { faker } from '@faker-js/faker';

import { Props } from "../types/rootTypes";
import { ListStories, Post } from '../components'


const HomeScreen = ({ navigation }: Props) => {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First',
      image: faker.image.avatar()
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second item',
      image: faker.image.avatar()
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third',
      image: faker.image.avatar()
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d42',
      title: 'Fourth',
      image: faker.image.avatar()
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d2323',
      title: 'Fourth',
      image: faker.image.avatar()
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d22',
      title: 'Fourth Item',
      image: faker.image.avatar()
    },
  ];

  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView >
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={({ item }) => <ListStories {...item} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View style={styles.content}>
        <Post />
        <Post />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 20
  }
})
export default HomeScreen;