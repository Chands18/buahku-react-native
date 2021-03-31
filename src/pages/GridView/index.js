import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderGrid } from '../../components'
import GridContent from '../../components/Molecules/GridContent'

const GridView = () => {
    return (
        <View>
            <HeaderGrid/>
            <GridContent/>
        </View>
    )
}

export default GridView

const styles = StyleSheet.create({})
