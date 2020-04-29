import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Header = () => {
    return (
        <View style={styles.Header}>
            <Image source={require('../assets/virus.jpg')}
             style={{width: 30, height: 30}}
             />
             <Text style={styles.text}> COVID-19 </Text>
            </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Header:{
        height: 90,
        paddingTop:38,
        backgroundColor:'red',
        flexDirection:'row',
        paddingLeft:150
    },
    text:{
        textAlign:'center',
        color:'#fff',
        
        fontSize:20,
        fontWeight:'bold',
        
    }
})
