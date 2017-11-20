import React, { Component } from 'react';
import {View,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        Text,
        StatusBar
} from 'react-native';

export default class LoginFrom extends Component {
  render() {
    return (
      <View style={styles.containerInput}>
        <StatusBar>
          barStyle="light-content"
        </StatusBar>

        <TextInput
        placeholder = "Username or Email"
        returnKeyType="next"
        onSubmitEditing={()=> this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}>
        </TextInput>

        <TextInput
        placeholder = "Password"
        secureTextEntry
        returnKeyType="go"
        ref={(input)=> this.passwordInput = input}
        style={styles.input}>
        </TextInput>

        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
          LOGIN
          </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerInput: {
    //alignItems: 'center',
    //flex: 1,
    height: 450,
    padding: 20
},
input: {
  height: 40,
  backgroundColor: 'rgba(255,255,255,0.2)',
  marginBottom: 15,
  color: '#FFF',
  paddingHorizontal: 10,
  //borderWidth: 1,
  borderRadius: 5
},
buttonContainer: {
  backgroundColor: '#2980b9',
  borderRadius: 5,
  paddingVertical: 10
},
buttonText: {
  textAlign: 'center',
  color: '#FFFFFF',
  fontSize: 20,
  fontWeight: '700'
}
});
