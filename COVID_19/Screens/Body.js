import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native'
import axios from 'axios'

const Body = () => {
    const [post, setpost] = useState([])
    useEffect(()=>{
        axios.get('https://api.thevirustracker.com/free-api?global=stats')
            .then(res=>{
                console.log(res)
                setpost(res.data.results)
            })
            .catch(err=>{
                console.log(err)
            })
    },[])
    return (
        <ScrollView>
        <View>
            <Image source={require('../assets/body.jpg')}/>
            <Text style={styles.title}>TOTAL REPORTS</Text>
            
       
          {
              post.map(posts=>(<View style={styles.container}>
                  <Text style={styles.main}>Affected Countries = {posts.total_affected_countries}</Text>
                  <Text style={styles.main}>Case = {posts.total_cases}</Text>
                  <Text style={styles.main}>Recovered = {posts.total_recovered}</Text>
                  <Text style={styles.main}>Unresolved = {posts.total_unresolved}</Text>
                  <Text style={styles.main}>Death = {posts.total_deaths}</Text>
                  <Text style={styles.title}>TODAY REPORTS</Text>
                  <Text style={styles.main1}>Today Case = {posts.total_new_cases_today}</Text>
                  <Text style={styles.main1}>Today Death = {posts.total_new_deaths_today}</Text>
                  <Text style={styles.main1}>Active Case = {posts.total_active_cases}</Text>
                  <Text style={styles.main1}>Serious Case = {posts.total_serious_cases}</Text>
                 <Text style={styles.foot} onPress={() => Linking.openURL("https://thevirustracker.com/")}>Reference - {posts.source.url}</Text>
              </View>))
          }
        </View>
        </ScrollView>
    )
}

export default Body

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center'
    },
    title:{
        color:'white',
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold',
        margin:18
    },
    main:{
        color:'white',
        fontSize:22,
        backgroundColor:'green',
        padding:20,
        margin:24,
        marginTop:5,
        textAlign:'center'
    },
    main1:{
        color:'white',
        fontSize:22,
        backgroundColor:'blue',
        padding:20,
        margin:24,
        marginTop:5,
        textAlign:'center'
    },
    foot:{
        color:'#00A0FF',
        textAlign:'center',
        margin:22,
        fontSize:18
    }
})
