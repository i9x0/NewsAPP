import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

function Home()  {
    return (
        
        <View style={{ height:"100%",width:"100%",alignItems:"center"}}>
            <View style={styles.names}> 
            <Text style={{fontSize:20}}>Name: Abdullah Mohammed </Text>
            <Text style={{fontSize:20}}></Text>
            <Text style={{fontSize:40 ,fontWeight:'400'}}></Text>
            </View>
            <View style={styles.overview}>
            <View  style={styles.header}>
            <Text style={{fontSize:30}}>OverView:</Text></View>
            <View  style={styles.hf}>
             <Text style={{fontSize:20}}>The news application is a simple application that combines
              all the important news such as today's stock prices, weather, Corona 
              virus outbreak statistics, etc.,</Text>
             </View>
            </View>
            <View style={styles.img}>
                <Image style={{height:350,width:400}} source={require('./icons/news.png')}/>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    names:{
     height:"17%",
     width:"100%",
     borderWidth:5,
     borderColor:"#6589ad"
 
    },
    img:{
        
        marginTop:0
    },   
     overview:{
        height:"25%",
        width:"100%",
        
            },
            header:{
        height:"25%",
        width:"100%",
        
            },
            hf:{
        height:"75%",
        width:"100%",
            }
})
