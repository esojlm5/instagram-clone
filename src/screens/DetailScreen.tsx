import { Text, View } from "react-native";
import { useSelector } from 'react-redux';

import type { RootState } from '../redux/store';

const DetailsScreen = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>{count}</Text>
    </View>
  );
}

export default DetailsScreen;