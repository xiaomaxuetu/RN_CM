
import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image,SectionList } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../../../common/index'
import {PattrolTaskFeedbackDetail} from '../../../Api'
import {getFetch,postFetch} from '../../../Utils/ApiHelper'
export default class Feedback extends PureComponent{


    constructor(){
        super()
    }
    componentDidMount(){

    }
    componentWillMount(){
        const info = this.props.keyPoint;
        const infoOb = JSON.parse(info)
        const layerName = infoOb.GisLayer
        const nodeName = "巡检反馈";
        const flowName = "巡检流程";
        const feedbackID = infoOb.FeedbackID
        const defaultParams = "GIS图层"+infoOb.GisLayer+";GIS编号:"+infoOb.FieldValue+";GIS坐标:"+infoOb.Position

        getFetch("http://192.168.12.6:8091/cityinterface/Services/Zondy_MapGISCitySvr_CaseManage/REST/CaseManageREST.svc/GetFeedbackTableInfo?layerName=%E5%BA%AD%E9%99%A2%E7%82%B9&flowName=%E5%B7%A1%E6%A3%80%E6%B5%81%E7%A8%8B&nodeName=%E5%B7%A1%E6%A3%80%E5%8F%8D%E9%A6%88&feedbackID=2&defaultParam=GIS%E5%9B%BE%E5%B1%82%3A%E5%BA%AD%E9%99%A2%E7%82%B9%3BGIS%E7%BC%96%E5%8F%B7%3ATYD00000058%3BGIS%E5%9D%90%E6%A0%87%3A374342.416377%2C545832.618030").then(
            response=>{
                const haha = response.getMe;
            }
        ).catch(

        )

    }

    
    render(){

        return(
           <View/>
        )
    }

}