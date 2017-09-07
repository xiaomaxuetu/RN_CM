import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'
import DoingBoxScene from '../DoingBox/DoingBoxScene'
import PatrolTaskScene from '../../modules/PartrolTask/component/PatrolTask'
import MapView from '../../component/MapView'
import MapScene from '../../scene/Map/MapScene'
import MapControl from '../../component/MapViewControlModal'

class HomeScene extends PureComponent{
    static navigationOptions = ({ navigation }) => ({
        headerTitle: '巡检总览',
        headerStyle: { backgroundColor: 'white' },
    })
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
        return(
            <PatrolTaskScene navigation={this.props.navigation}/>
        );
    }

}
export default HomeScene;
