import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'
import color from '../../../widget/color'
import {PartrolTaskApi,PartrolTaskAreaApi,PartrolTaskAreaPoints} from '../../../Api'
import {Heading1,Heading2,Paragraph} from '../../../widget/Text'
import { screen } from '../../../common/index'
import ParTrolTaskItem from './PartrolTaskItem'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeMusicControlModalVisbility,changeMapControlPolylineList,changeMapControlPolypointList,getMapControlNavigation} from '../../../actions/mapView';
import {getFetch,postFetch} from '../../../Utils/ApiHelper'
class PatrolTask extends PureComponent{
    constructor(props){
        super(props)
        this.state = {
            dataList:[],
            refreshing:false,
            isFinish:true,
            totalRcdNum:'',
            currentPage:1,
        }
        this.renderCell = this.renderCell.bind(this)
        this.onCellSelected = this.onCellSelected.bind(this)
        this.keyExtractor=this.keyExtractor.bind(this)
        this.requestData = this.requestData.bind(this)
        this.onCellSelected=this.onCellSelected.bind(this)
        this.onEndReached=this.onEndReached.bind(this)
        this.onRefreshed=this.onRefreshed.bind(this)
    }
    componentDidMount(){
        this.requestData()
    }
    componentWillMount(){
    }
    renderCell(info){
        return(
            <ParTrolTaskItem
                key={info}
                info={info}
                onPress={this.onCellSelected}
            />
        )
    }
    requestData(){
        this.setState({refreshing:true,dataList:[],currentPage:1})
        this.requestRecommend().then().catch()
    }

    async requestAreaList(item){
        try {
            let response = await fetch(PartrolTaskAreaApi(item.ID))
            let json = await response.json()
            this.props.changeMapControlPolylineList({'partrolScan':json});

        }catch (error){

        }
    }
    async requestAreaPoints(item){
        try {
            let response = await fetch(PartrolTaskAreaPoints(item.ID))
            let json = await response.json()
            this.props.changeMapControlPolypointList({'partrolScan':json});

        }catch (error){

        }
    }
    async requestRecommend(){
        try{
            let response = await fetch(PartrolTaskApi(this.state.currentPage))
            let json = await response.json()
            let dataList = json.getMe.map(
                (info,index)=>{

                    return info;
                }
            )
            let totalRcdNum = json.totalRcdNum;
            if (this.state.refreshing ===true){
                this.setState({
                    dataList:dataList,
                    refreshing:false,
                    totalRcdNum:totalRcdNum,
                })
            }else {
                const newdataList = [...this.state.dataList,...dataList]
                this.setState({
                    dataList:newdataList,
                    refreshing:false,
                })
            }


        }catch (error){
            this.setState({refreshing:false})
        }
    }
    onCellSelected(item){

        this.props.changeMusicControlModalVisibility(true);
        this.props.getMapControlNavigation(this.props.navigation);
        this.requestAreaList(item).then().catch();
        this.requestAreaPoints(item).then().catch();
        this.props.navigation.navigate('Maps')

    }
    keyExtractor(item, index) {
        return index
    }
    onEndReached(){
        if (this.state.dataList.length<this.state.totalRcdNum){
            this.setState({currentPage:this.state.currentPage+1,refreshing:false})
            this.requestRecommend().then().catch();
        }
    }
    onRefreshed(){

    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.dataList}
                    keyExtractor={this.keyExtractor}
                    onRefresh={this.requestData}
                    refreshing={this.state.refreshing}
                    renderItem={this.renderCell}
                    onEndReached={this.onEndReached}
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:color.background
    }
});
const mapStateToProps =state =>{
    let mapView = state.mapView;
    let visible = true;
    return {visible}
}
const mapDispatchToProps = dispatch =>{
    return{
        changeMusicControlModalVisibility: bindActionCreators(changeMusicControlModalVisbility, dispatch),
        changeMapControlPolylineList:bindActionCreators(changeMapControlPolylineList, dispatch),
        changeMapControlPolypointList:bindActionCreators(changeMapControlPolypointList,dispatch),
        getMapControlNavigation:bindActionCreators(getMapControlNavigation,dispatch)


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(PatrolTask);
