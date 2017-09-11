import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image,FlatList } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../common/index'
import DeviceItem from './DevicePropsItem'

export default class DeviceProps extends PureComponent{


    constructor(){
        super()
    }
    componentDidMount(){

    }
    componentWillMount(){
    }

    renderCell(info){
        return(
            <DeviceItem
                key={info}
                info={info}
            />
        )
    }
    keyExtractor(item, index) {
        return index
    }
    render(){
        const info = this.props.tableData;
        return(
            <FlatList
                data={info}
                keyExtractor={this.keyExtractor}
                renderItem={this.renderCell}
            />
        )
    }

}