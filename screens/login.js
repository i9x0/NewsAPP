import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';


function login({ navigation }) {

  const [user, setuser] = useState(null);
  const [pass, setpass] = useState(null);
  const [err, seterr] = useState('');

  const Get = () => {
    const urlget = 'https://abdullah-dd36.restdb.io/rest/info?q={"user":"' +user +'"}';
    var options = {
      method: 'GET',

      headers:
      {
        'cache-control': 'no-cache',
        'x-apikey': '9503666d8ce74f7c9c916ce32daa99839177b'
      }
    };
    fetch(urlget, options)
      .then((response) => response.json())
      .then((responseJson) => {
      console.log(responseJson)
        if (responseJson[0].user === user && responseJson[0].password === pass) {
          navigation.navigate('Home')      
        } else {
          seterr("password is not correct")
        }


      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.head}><Text style={{ fontSize: 50 }}>Login</Text></View>
      <View style={styles.inus}>
        <View style={styles.left}>
          <Image style={{ width: 50, height: 50, resizeMode: 'stretch', marginTop: 30 }} source={require("./icons/user.png")} />
          <Image style={{ width: 45, height: 50, resizeMode: 'stretch', marginTop: 20 }} source={require("./icons/pass.png")} />
        </View>
        <View style={styles.right}>
          <TextInput style={styles.textinput} placeholder="Your name" value={user} onChangeText={setuser} />
          <TextInput style={styles.textinput} placeholder="Your password"  secureTextEntry={true}  value={pass} onChangeText={setpass} />
          
        </View>

      </View>
     
      <Text style={{ color: "red"}}>                             {err}</Text>  
      <View style={styles.hyberlink}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'blue', fontSize: 15 }}>
            Registration
          </Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.ButtonLogin} onPress={()=>{ navigation.navigate('Home')  }}>
        <Text style={{ color: '#fff', fontSize: 25 }}>
          Login
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default login;

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
    marginTop: "10%",
    alignItems: "center",
    justifyContent: "center",
    //  height: "10%",
    //width: "50%",
    flex: 0.3,
    backgroundColor: "#6589ad",
  },

});

