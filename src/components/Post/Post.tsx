import { useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, SafeAreaView } from 'react-native';
import { faker } from '@faker-js/faker';
import { useNavigation } from '@react-navigation/native';


import { BookMarkIcon, HeartIcon, ShareIcon, CommentIcon } from '../../icons';


const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.headerImage} source={{ uri: faker.image.avatar() }}></Image>
      <Text style={styles.text}>post here </Text>
    </View>
  )
}

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerIcons}>
        <HeartIcon style={styles.footerIcon} />
        <CommentIcon style={styles.footerIcon} />
        <ShareIcon style={styles.footerIcon} />
        <BookMarkIcon style={[styles.footerIcon, styles.bookmarkIcon]} />
      </View>
      <View style={styles.likes}>
        <Text>100 Likes</Text>
      </View>
      <Text style={styles.description}>
        <Text style={styles.userName}>Ruffles &nbsp;</Text>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consequatur blanditiis tempora dolorem earum? Soluta illo eaque, aut tempora possimus vero repellendus animi, ratione iusto facilis fugit dolores nobis aperiam?
        </Text>
      </Text>
    </View>
  )
}

const InputComment = () => {
  const navigation = useNavigation();
  const [text, onChangeText] = useState();
  return (
    <SafeAreaView >
      <TextInput style={styles.input} onChangeText={() => navigation.navigate('Comment')} value={text} />
    </SafeAreaView>)
}


const Post = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.postImage}>
        <Image style={styles.image} source={{ uri: faker.image.avatar() }}></Image>
      </View>
      <Footer />
      <InputComment />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {

  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  postImage: {
    width: '100%',
    aspectRatio: 4.0 / 5.0
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 20,
    borderWidth: .5,
    padding: 10,
    width: '90%',
    alignSelf: 'center'
  },
  likes: {
    marginVertical: 10,
  },
  userName: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  description: {
    fontSize: 13
  },
  content: {
    marginLeft: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  footer: {
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  bookmarkIcon: {
    marginLeft: 'auto'
  },
  footerIcon: {
    paddingRight: 14
  },
  footerIcons: {
    flexDirection: 'row',
  },
  headerImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10
  },
  text: {
    textTransform: 'capitalize',
    fontWeight: 'bold'
  }
})
export default Post;