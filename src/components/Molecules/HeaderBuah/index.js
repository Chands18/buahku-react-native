import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HeaderBuah = () => {
    return (
        <View style={{backgroundColor:'teal',height:60, flexDirection:'row',alignItems:'center', width:'100%'}}> 
            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center' ,marginHorizontal:110, color:'linen' }}>Macam-Macam Buah</Text>
        </View>
    )
}

export default HeaderBuah

const styles = StyleSheet.create({})
