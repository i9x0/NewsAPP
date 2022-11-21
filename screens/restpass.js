import React from 'react';
import { useState } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';
const restpass = ({ navigation }) => {
    const Update = () => {
        const urlget =
            'https://abdullah-dd36.restdb.io/rest/info?q={"password":"' + pass + '"}';
        var optionsget = {
            method: 'GET',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '9503666d8ce74f7c9c916ce32daa99839177b',},};
        fetch(urlget, optionsget).then((res) => res.json()).then((resjson) => {
            
            let x = resjson[0].user
            const url = 'https://abdullah-dd36.restdb.io/rest/info/' + resjson[0]._id;
            var options = {
                method: 'PUT',
                headers: {
                    'cache-control': 'no-cache',
                    'x-apikey': '9503666d8ce74f7c9c916ce32daa99839177b',
                    'content-type': 'application/json',},
                body: JSON.stringify({ user: x, password: npass }),
                json: true,};
            if (resjson[0].password === pass && resjson[0].user ===user) {
                fetch(url, options)
                    .then((respons) => respons.json())
                    .then((responsjson) => {
                   
                    });
            } else {
                seterr("password is not correct")
                setPass(null)
                setpass(null)
            }})}
    const [user, setuser] = useState(null);
    const [pass, setPass] = useState(null);
    const [npass, setpass] = useState(null);
    const [err, seterr] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={{ fontSize: 30 }}>Update Your Password</Text>
            </View>
            <View style={styles.inus}>
                <View style={styles.left}>
                <View style={styles.icon}>
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'stretch',
                                marginTop: 30,
                                marginLeft: 5
                            }}
                            source={require('./icons/user.png')}
                        /></View>
                    <View style={styles.icon}>
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'stretch',
                                marginTop: 10,
                                marginLeft: 5
                            }}
                            source={require('./icons/pass.png')}
                        /></View>
                    <View style={styles.icon}>
                        <Image
                            style={{
                                width: 40,
                                height: 40,
                                resizeMode: 'stretch',
                               
                                marginLeft: 5,
                            }}
                            source={require('./icons/pass.png')}
                        /></View>
                </View>
                <View style={styles.right}>
                <TextInput
                        style={styles.textinput}

                        placeholder="enter your corrcet username"
                        value={user}
                        onChangeText={setuser}
                    />
                    <TextInput
                        style={styles.textinput}

                        placeholder="enter your corrcet password"
                        value={pass}
                        onChangeText={setPass}
                    />

                    <TextInput
                        style={styles.textinput}
                        placeholder="new password"
                        secureTextEntry={true}
                        value={npass}
                        onChangeText={setpass}
                    />
                </View>
            </View>
            <Text style={{ color: "red" }}>                             {err}</Text>
            <TouchableOpacity style={styles.ButtonLogin}>
                <Text
                    style={{ color: '#fff', fontSize: 25 }}
                    onPress={Update}>
                    Update
                </Text>
            </TouchableOpacity>
            <View style={styles.ButtonLogin1}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: '#fff', fontSize: 25 }}>
                                Logout
                            </Text>
                        </TouchableOpacity>
                    </View>
        </View>
    )
}

export default restpass

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#fff',

        padding: 8,
    },
    head: {
       
        alignItems: 'center',
        marginTop: 30,
        height: '10%',
        width: '100%',
    },
    icon: { height: "50%", width: "100%" },
    inus: {
        
        flexDirection: 'row',
        height: '37.5%',
        width: '100%',
        
        justifyContent: 'space-between',
    },
    left: {
        flexDirection: 'column',
        height: '100%',
        width: '20%',
    },
    right: {
        flexDirection: 'column',
        height: '100%',
        width: '80%',
    },
    hyberlink: {

        marginTop: "30%",
        alignItems: "center",
        justifyContent: "center",
        height: "10%",
        width: "100%",
        //flex:0.2
    },
    textinput: {
        borderRadius: 10,
        paddingLeft: 10,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 30,
        justifyContent: 'space-between',
        height: '25%',
        width: '100%',
    },
    ButtonLogin: {
        borderRadius: 10,
        marginTop: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: '100%',
        backgroundColor: '#6589ad',
    },
    ButtonLogin1:{
        borderRadius: 10,
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
        width: '100%',
        backgroundColor: 'red',
    }

})