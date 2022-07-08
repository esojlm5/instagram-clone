import { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { faker } from '@faker-js/faker';
import { Avatar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

type stories = {
  image: string
}

const ListStories = ({ image }: stories) => {

  return (
    <View style={styles.container}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 5
  },
  gradient: {
    borderRadius: 50,
    padding: 4,
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
export default ListStories