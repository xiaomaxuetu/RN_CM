import React, { PureComponent} from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList,Modal,TouchableHighlight,Dimensions } from 'react-native'
import MapView from '../component/MapView'
import { screen,system } from '../common'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {changeMusicControlModalVisbility} from '../actions/mapView';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
class MapViewControlModal extends PureComponent{
    constructor(props){
        super(props)
        this.state = {modalVisible: false};
    }

    componentDidMount(){
        this.state = {modalVisible: false};
    }
    setModalVisible(visible) {
        this.props.changeMusicControlModalVisibility(false)
    }
    showTaskDetail(event){
        const events = event.nativeEvent;
        // const naviagtion = this.props.navigation;
        this.props.navigation.navigate('PatrolFeedback')
    }
    render(){
        const  {polylinelist,isMapViewControlModalShow,polypointlist} = this.props;
        return(
                <Modal
                    animationType={"fade"}
                    transparent={true}
                    visible={isMapViewControlModalShow}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View>
                        <MapView
                            style={{height:windowHeight/2,width:windowWidth}}
                            showLogo={false}
                            offlineMapUrl={{'offline':'/Users/cmios/Desktop/MapGIS_Mobile_iOS_SDK/demos/data/MapGIS/map/wuhan/wuhan.xml'}}
                            annArray={{'offline':'offline'}}
                            polylinArray={polylinelist}
                            polypointArray={polypointlist}
                            onClickAnnViewCallback={(event)=>{this.showTaskDetail(event)}}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.bottomTouchableOpacity}
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible)
                        }}/>
                </Modal>
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
    },bottomTouchableOpacity: {
        backgroundColor: '#00000088',
        flex: 1
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
const mapDispatchToProps = dispatch =>{
    return{
        changeMusicControlModalVisibility: bindActionCreators(changeMusicControlModalVisbility, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MapViewControlModal);
