
import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';
import login from './screens/login'
import register from './screens/register';
import Home from './screens/home';
import NEWS from './screens/NEWS';
import Restpass from './screens/restpass';


const Tab = createBottomTabNavigator();
function HomeTab() {
  return (

    <Tab.Navigator initialRouteName='home'>
      <Tab.Screen name="Rest Password" component={Restpass} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="document" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="home" component={Home} options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" color={color} size={size} />
        ),
      }}
      />
      <Tab.Screen name="News" component={NEWS} options={{
        tabBarBadge: 5,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="newspaper" color={color} size={size} />
        ),
      }} />

    </Tab.Navigator>

  );
}
function Splashscreen({navigation}){
  setTimeout(() => {
    navigation.navigate('Login')
  }, 8000);
  return(
    <ImageBackground style={{flex:1}} source={require('./screens/icons/splashh.png')}/>
  )
}
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator > 
      <Stack.Screen options={{ headerShown: false }} name="Splash" component={Splashscreen} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={login} />
        <Stack.Screen options={{ title: "Back To Login" }} name="Register" component={register} />
        <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
