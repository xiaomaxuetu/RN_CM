import React, { PureComponent} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'
import MapView from '../../component/MapView'
import { screen,system } from '../../common'

class MapScene extends PureComponent{
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    render(){
            return(
                <MapView style={styles.container}/>
            );
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    androidMap:{
        flex:1,
        width:screen.width,
    }
});
export default MapScene;
