import React, { PureComponent} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList,Dimensions } from 'react-native'
import MapView from '../../component/MapView'
import { screen,system } from '../../common'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {changeMusicControlModalVisbility} from '../../actions/mapView';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class MapScene extends PureComponent{
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    showTaskDetail(event){
        const events = event.nativeEvent;
        const taskPoint = events["partrolScan"]
        // const naviagtion = this.props.navigation;
        this.props.navigation.navigate('PatrolFeedback',{info:JSON.stringify(taskPoint)})
    }
    render(){
        const  {polylinelist,polypointlist} = this.props;
            return(
                <MapView
                    style={styles.container}
                    showLogo={false}
                    offlineMapUrl={{'offline':'/Users/cmios/Desktop/MapGIS_Mobile_iOS_SDK/demos/data/MapGIS/map/wuhan/wuhan.xml'}}
                    annArray={{'offline':'offline'}}
                    polylinArray={polylinelist}
                    polypointArray={polypointlist}
                    onClickAnnViewCallback={(event)=>{this.showTaskDetail(event)}}
                />
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
const mapStateToProps = state => {
    let MapView = state.mapView;
    let isMapViewControlModalShow = MapView.isMapViewControlModalShow;
    let polylinelist = MapView.polylinelist;
    let polypointlist = MapView.polypointlist;
    let navigation = MapView.navigation;
    return{isMapViewControlModalShow,polylinelist,polypointlist,navigation}
}
export default connect(mapStateToProps)(MapScene);
