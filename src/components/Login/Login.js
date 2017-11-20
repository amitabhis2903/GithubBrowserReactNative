import React, { Component } from 'react';
import {View,
        StyleSheet,
        Image,
        Text
} from 'react-native';
import LoginFrom from './LoginFrom'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo}
          source={require('../../Images/Octocat.png')}>
          </Image>
          <Text style={styles.textContainer}>
            Github Browser
          </Text>
        </View>
        <View style={styles.fromContainer}>
        <LoginFrom>
        </LoginFrom>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#3498db'
},
logoContainer: {
  alignItems: 'center',
  flex: 1,
  paddingTop: 30
},
logo: {
  width: 100,
  height: 100
},
textContainer: {
  color: 'white',
  fontSize: 20,
  fontWeight: '400',
  textAlign: 'center',
  opacity: 0.9,
  paddingTop: 10
}
});
