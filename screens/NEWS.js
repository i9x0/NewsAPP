import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking ,Image} from 'react-native';


function NEWS() {
    return (
        <View style={{ alignItems: "center", height: "100%", width: "100%" }}>
            <TouchableOpacity onPress={() => Linking.openURL('https://ncm.gov.sa/Ar/Weather/LocalWeatherInfo/Pages/Todayweather.aspx')} style={styles.newss}>
                    <View style={styles.left}>
                        
                        <Text style={{fontSize:30}}>Weather Prediction </Text>
                    </View>
                    <View style={styles.right}>
                    <Image style={{height:120,width:120}} source={require('./icons/weath.png')}/>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.saudiexchange.sa/wps/portal/tadawul/markets/equities/market-watch?locale=ar')} style={styles.newss}>
                    <View style={styles.left}>
                        
                        <Text style={{fontSize:30}}>Stock market</Text>
                    </View>
                    <View style={styles.right}>
                        <View style={{marginTop:10}}>
                    <Image style={{height:90,width:100}} source={require('./icons/stock.png')}/></View>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://sehhty.com/')} style={styles.newss}>
                    <View style={styles.left}>
                        
                        <Text style={{fontSize:30}}>Corona virus stats</Text>
                    </View>
                    <View style={styles.right}>
                    <Image style={{height:120,width:120}} source={require('./icons/covid.png')}/>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://aitnews.com/latest-it-news/esecurity-news/')} style={styles.newss}>
                    <View style={styles.left}>
                        
                        <Text style={{fontSize:30}}>New cyber security </Text>
                    </View>
                    <View style={styles.right}>
                    <Image style={{height:120,width:110}} source={require('./icons/cyber.png')}/>
                    </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://hijri-calendar.com/')} style={styles.newss}>
                    <View style={styles.left}>
                        
                        <Text style={{fontSize:30}}>Calendar </Text>
                    </View>
                    <View style={styles.right}>
                    <Image style={{height:110,width:110}} source={require('./icons/Calenda.png')}/>
                    </View>
            </TouchableOpacity>

        </View>
    )
}

export default NEWS

const styles = StyleSheet.create({
    newss: {
        height: "20%",
        width: "100%",
        borderWidth: 5,
        borderColor: "#6589ad",
        flexDirection: "row",
       
    },
    left: {
        alignItems:"center",
        justifyContent:"center",
        width: "70%",
        height: "100%",
       // marginTop:35,
      //  backgroundColor:"red"
       
    },
    right: {
        width: "30%",
        height: "100%",
        padding:2
        //backgroundColor:"blue"
    }
})