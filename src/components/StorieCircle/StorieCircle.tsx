import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Image, View } from 'react-native';

type props = {
  image: string
}

const StorieCircle = ({ image }: props) => {
  return (
    <LinearGradient
    colors={['#DE0046', '#F7A34B']}
    style={styles.gradient}
  >
    <View style={styles.white}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
    </View>
  </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 50,
    padding: 3,
  },
  white: {
    borderRadius: 50,
    backgroundColor: 'white',
    padding: 2,
  },
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
  }
})

export default StorieCircle;