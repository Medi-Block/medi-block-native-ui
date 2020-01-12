import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { goLocal } from './navigation'
import { LOCAL_DEVELOPMENT } from './config.js'

export default class Initializing extends React.Component {
  async componentDidMount() {
    try {
      // const user = await AsyncStorage.getItem(USER_ID);
      if (LOCAL_DEVELOPMENT.length > 0) {
        console.warn("Development ");
        goLocal();
        return;
      }
      // const user = await Auth.currentAuthenticatedUser();
      // console.warn('user: ', user);
      // if (user) {
      //   console.warn("User present ");
      //   goHome();
      // } else {
      //   console.warn("Auth");
      //   goToAuth();
      // }
    } catch (err) {
      // console.warn('error: ', err)
      // goToAuth();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})