import React, { Component } from 'react';
import {View,
        StyleSheet,
        TextInput,
        TouchableOpacity,
        Text,
        ActivityIndicator,
        Keyboard
} from 'react-native';
var buffer = require('buffer');
//var base64 = require('base-64');

export default class LoginFrom extends Component {
  constructor(props){
    super(props);
    //Providing the defalut value of Activity Indicator
    this.state = {
      showProgress: false
    }
  }
  render() {
    return (
      <View style={styles.containerInput}>
        <TextInput
        //Get the text From TextInput
        onChangeText={(text)=> this.setState({username: text})}
        placeholder = "Username or Email"
        returnKeyType="next"
        onSubmitEditing={()=> this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}>
        </TextInput>

        <TextInput
        //Get the text From TextInput
        onChangeText={(text)=> this.setState({password: text})}
        placeholder = "Password"
        secureTextEntry
        returnKeyType="go"
        ref={(input)=> this.passwordInput = input}
        onSubmitEditing={Keyboard.dismiss}
        style={styles.input}>
        </TextInput>

        <TouchableOpacity
        //Calling The onLoginPressed Function on Button
          onPress={this.onLoginPressed.bind(this)}
          style={styles.buttonContainer}>
          <Text
          style={styles.buttonText}>
          LOGIN
          </Text>
        </TouchableOpacity>

        <ActivityIndicator
          animating = {this.state.showProgress}
          size = "large"
          color = "white"
          style = {styles.indicator}
        />

      </View>
    );
  }
  //Define Function on Login Button Pressed
  onLoginPressed(){
    console.log('Attempt Login with Username ' + this.state.username);
    //Show Activity Indicator when Login Button Pressed
    this.setState({showProgress: true});

    var b = new buffer.Buffer(this.state.username + ':' + this.state.password);
     var encodedAuth = (b.toString('base64'));
    //Calling Github Api
    fetch('https://api.github.com/user',{
      headers: {
        'Authorization' : 'Basic ' + encodedAuth
      }
    })
    .then((response)=> {
        return response.json();
    })
    .then((results)=> {
      console.log(results);
      this.setState({showProgress: false});
    });
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
},
indicator: {
  marginTop: 20
}
});
