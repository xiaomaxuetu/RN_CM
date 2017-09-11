import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../../../common/index'
import DeviceProps from '../../../component/DeviceProps'

export default class Attr extends PureComponent{


    constructor(){
        super()
    }
    componentDidMount(){

    }
    componentWillMount(){
    }

    render(){
        const info = this.props.keyPoint;
        const infoOb = JSON.parse(info)
        let tableData = [];
        tableData.push({KEY:"图层",Value:infoOb.GisLayer})
        tableData.push({KEY:"GIS编号",Value:infoOb.FieldValue})
        return(
            <DeviceProps tableData={tableData}/>
        )
    }

}