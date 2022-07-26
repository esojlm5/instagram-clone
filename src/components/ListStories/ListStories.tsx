import { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { useAppDispatch } from '@hooks/useRedux';
import { LinearGradient } from 'expo-linear-gradient';

import { userFetch } from '../../redux/loginSlice';

type stories = {
  image: string,
  title: string,
}

const ListStories = ({ image, title }: stories) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(userFetch({ 'email': 'jose1@gmail.com', 'password': 'jose123' }))
  }, [])

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
      <Text numberOfLines={1}>{
        title.length < 10
          ? `${title}`
          : `${title.substring(0, 8)}...`
      }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 5,
    alignItems: 'center',
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
  text: {
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    // width: 60
  },
  image: {
    borderRadius: 50,
    width: 60,
    height: 60,
  }
})
export default ListStories