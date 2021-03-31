import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import BuahContent from '../../components/Molecules/BuahContent'
import HeaderBuah from '../../components/Molecules/HeaderBuah'

const Home = () => {
    return (
        <View>
            <HeaderBuah/>
            <BuahContent/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
