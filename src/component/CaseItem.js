import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../common/index'
import color from "../widget/color";

export default class CaseItem extends PureComponent{


    constructor(){
        super()
    }
    componentDidMount(){

    }
    componentWillMount(){
    }

    render(){

        const item  = this.props.item.item;
        return(
            <View style={styles.container}>
                <Text style={styles.text1}>{item.FieldName}</Text>
                <Text>{item.FieldValue}</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        height:screen.height/15,
        width:screen.width,
        backgroundColor:color.background,
        flexDirection:'row',
        alignItems:'center',
        borderColor:color.border,
        borderWidth:1,
    },
    text1:{
        paddingRight:10,
        paddingLeft:10,
        color:color.asset_detail_key
    },
});