import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../../../common/index'
import Attr from './Attr'
import Feedback from './Feedback'
import color from '../../../widget/color'

export default class PartrolTaskFeedback extends PureComponent{

    static navigationOptions = ({ navigation }) => ({
        headerTitle: '巡检反馈',
        headerStyle: { backgroundColor: 'white' },
    })
    constructor(){
        super()
    }
    componentDidMount(){

    }
    componentWillMount(){
    }

    render(){
        const titles = ['反馈','属性']
        return(
            <ScrollableTabView
                style={styles.container}
                tabBarBackgroundColor='white'
                tabBarActiveTextColor='#2881a2'
                tabBarInactiveTextColor='#555555'
                tabBarTextStyle={styles.tabBarText}
                tabBarUnderlineStyle={styles.tabBarUnderline}
            >
                <Attr tabLabel="反馈"/>
                <Feedback tabLabel="属性"/>
            </ScrollableTabView>
        )
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background
    },
    searchBar: {
        width: screen.width * 0.65,
        height: 30,
        borderRadius: 19,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    searchIcon: {
        width: 20,
        height: 20,
        margin: 5,
    },
    tabBarText: {
        fontSize: 14,
        marginTop: 13,
    },
    tabBarUnderline: {
        backgroundColor: '#2881a2'
    },
});