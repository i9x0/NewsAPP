import React from 'react'
import { useState, useEffect } from 'react'
import { Linking } from 'react-native';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function register({ navigation }) {
  const [username, setUser] = useState(null);
  const [pass, setPass] = useState(null);
  const Signup = () => {
    const url = 'https://abdullah-dd36.restdb.io/rest/info';
    var options = {
      method: 'POST',
      headers: {
        'cache-control': 'no-cache',
        'x-apikey': '9503666d8ce74f7c9c916ce32daa99839177b',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ user: username, password: pass }),
      json: true,
    };
    fetch(url, options).then((respons) => {
      if (respons.ok) {
        navigation.navigate('Home')
        console.log('The User ' + username + ' Registerd');
      } else {
      
        setUser(null);
        setPass(null);
      }
    });

  }
  return (
    <View style={styles.container}>
      <View style={styles.head}><Text style={{ fontSize: 50 }}>Register</Text></View>
      <View style={styles.inus}>
        <View style={styles.left}>
          <Image style={{ width: 50, height: 50, resizeMode: 'stretch', marginTop: 30 }} source={require("./icons/user.png")} />
          <Image style={{ width: 40, height: 40, resizeMode: 'stretch', marginTop: 35, marginLeft: 5 }} source={require("./icons/pass.png")} />
        </View>
        <View style={styles.right}>
          <TextInput style={styles.textinput} placeholder="Your name" value={username} onChangeText={setUser} />
          <TextInput style={styles.textinput} placeholder="Your password" secureTextEntry={true} value={pass} onChangeText={setPass} />
        </View>

      </View>




      <TouchableOpacity style={styles.ButtonLogin} >
        <Text style={{ color: '#fff', fontSize: 25 }} onPress={Signup}>
          Register
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default register

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#002b36",
    backgroundColor: '#ecf0f1',
    padding: 8,


  },
  head: {

    alignItems: "center",
    marginTop: 60,
    height: "10%",
    width: "100%",
    //flex:0.2,
    //
  },
  inus: {

    flexDirection: "row",
    height: "25%",
    width: "100%",
    //flex:0.5,
    marginTop: 60,
    //  backgroundColor: "blue",
    justifyContent: "space-between"
  },
  left: {
    flexDirection: "column",
    height: "100%",
    width: "20%",
    //flex:0.2
  },
  right: {
    flexDirection: "column",
    height: "100%",
    width: "80%",
    //flex:1
  },
  textinput: {
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 30,
    justifyContent: "space-between",
    height: "25%",
    width: "100%",
    // flex:0.15,
  },
  hyberlink: {

    marginTop: "0%",
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    width: "100%",
    //flex:0.2
  },
  ButtonLogin: {
    borderRadius: 10,
    //marginLeft: "25%",
    marginTop: "30%",
    alignItems: "center",
    justifyContent: "center",
    //  height: "10%",
    //width: "50%",
    flex: 0.3,
    backgroundColor: "#6589ad",
  },

});
