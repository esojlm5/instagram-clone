import { Text, View } from "react-native";
import { useSelector } from 'react-redux';

import type { RootState } from '../redux/store';

const ProfileScreen = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Text>{count}</Text>
    </View>
  );
}

export default ProfileScreen;