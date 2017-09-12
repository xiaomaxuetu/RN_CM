import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../../common/index'
import color from "../../widget/color";

export default class CMText extends PureComponent{


    constructor(){
        super()
    }
    componentDidMount(){

    }
    componentWillMount(){
    }

    render(){

        const item = this.props.item;
        const scan = this.props.scan;
        return(
            <View style={styles.container}>
                <Text style={styles.text1}>{item.FieldName}</Text>
                <Text>{item.FieldValue}</Text>
            </View>
        )
    }

}
const styles = StyleSheet.create({

});