import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HeaderGrid() {
    return (
        <View style={{backgroundColor:'teal',height:60, flexDirection:'row',alignItems:'center', width:'100%'}}> 
            <Text style={{fontSize:18,fontWeight:'bold',textAlign:'center' ,marginHorizontal:160, color:'linen' }}>Grid Buah</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
