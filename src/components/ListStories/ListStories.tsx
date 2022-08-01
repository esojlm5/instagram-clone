import { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import { useAppDispatch } from '@hooks/useRedux';
import { LinearGradient } from 'expo-linear-gradient';

import { userFetch } from '../../redux/loginSlice';
import { StorieCircle } from '@components/index'

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
      <StorieCircle image={image}/>
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
})
export default ListStories