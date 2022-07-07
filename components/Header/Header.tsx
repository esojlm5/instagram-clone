import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'

import { AddIcon, HeartIcon, LogoIcon, MessengerIcon } from '../../icons';

const Header = () => {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Action style={styles.logo} icon={() => <LogoIcon />} size={100} animated={false}></Appbar.Action>
      <Appbar.Action style={styles.icon} icon={() => <AddIcon />} animated={false}></Appbar.Action>
      <Appbar.Action style={styles.icon} icon={() => <HeartIcon />} animated={false}></Appbar.Action>
      <Appbar.Action style={styles.icon} icon={() => <MessengerIcon />} animated={false}></Appbar.Action>
    </Appbar.Header>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  logo: {
    marginRight: 'auto'
  },
  icon: {
  }
})

export default Header