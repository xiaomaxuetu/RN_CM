import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image, StatusBar, FlatList } from 'react-native'
import color from '../../widget/color'
import Api,{DoingBox} from '../../Api'
import {Heading1,Heading2,Paragraph} from '../../widget/Text'
import { screen } from '../../common'
import DoingBoxItem from './DoingBoxItem'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeMusicControlModalVisbility} from '../../actions/mapView';

class DoingBoxScene extends PureComponent{
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
            <DoingBoxItem
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

    async requestRecommend(){

        try{
            let response = await fetch(DoingBox(this.state.currentPage))
            let json = await response.json()
            let dataList = json.getMe.map(
                (info,index)=>{
                    return{
                        ActiveID:info.ActiveID,
                        ActiveName:info.ActiveName,
                        BusinessCode:info.BusinessCode,
                        BusinessType:info.BusinessType,
                        CaseNo:info.CaseNo,
                        CloseEvent:info.CloseEvent,
                        Direction:info.Direction,
                        DoingPage:info.DoingPage,
                        EventCode:info.EventCode,
                        EventMainTable:info.EventMainTable,
                        EventName:info.EventName,
                        EventPurview:info.EventPurview,
                        EventState:info.EventState,
                        FieldGroup:info.FieldGroup,
                        FinishTime:info.FinishTime,
                        FlowID:info.FlowID,
                        FlowMap:info.FlowMap,
                        FlowName:info.FlowName,
                        GeoArea:info.GeoArea,
                        GeoPath:info.GeoPath,
                        InterfaceConfig:info.InterfaceConfig,
                        IsArrive:info.IsArrive,
                        IsCreate:info.IsCreate,
                        IsFeedback:info.IsFeedback,
                        IsOver:info.IsOver,
                        IsOverTime:info.IsOverTime,
                        IsReport:info.IsReport,
                        MobileDoingPage:info.MobileDoingPage,
                        NextNodeID:info.NextNodeID,
                        NextStepID:info.NextStepID,
                        NodeType:info.NodeType,
                        OperType:info.OperType,
                        Opinion:info.Opinion,
                        OverTimeInfo:info.OverTimeInfo,
                        PreUnderTakeMan:info.PreUnderTakeMan,
                        ReadCaseTime:info.ReadCaseTime,
                        ReceivedState:info.ReceivedState,
                        ReportTime:info.ReportTime,
                        ReporterDepart:info.ReporterDepart,
                        ReporterName:info.ReporterName,
                        Station:info.Station,
                        StepID:info.StepID,
                        Summary:info.Summary,
                        SummaryDetail:info.SummaryDetail,
                        SummaryField:info.SummaryField,
                        UnderTakeMan:info.UnderTakeMan,
                        UnderTakeManID:info.UnderTakeManID,
                        UnderTakeTime:info.UnderTakeTime,
                        UndertakeNodes:info.UndertakeNodes,
                        XY:info.XY,
                    }
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
    onCellSelected(info){
        this.props.changeMusicControlModalVisibility(true);

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
        changeMusicControlModalVisibility: bindActionCreators(changeMusicControlModalVisbility, dispatch)
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(DoingBoxScene);
