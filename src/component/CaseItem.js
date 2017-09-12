import React, { PureComponent } from 'react'
import { View, StyleSheet, ScrollView, TouchableOpacity, ListView, Image } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../common/index'
import color from "../widget/color";
import TimePicker from './SonComponent/TimePicker'
import CheckBox from './SonComponent/CheckBox'
import Text from './SonComponent/CMText'
import Radio from './SonComponent/Radio'

export default class CaseItem extends PureComponent{


    constructor(){
        super()
    }
    componentDidMount(){

    }
    componentWillMount(){
    }

    render(){

        const schema  = this.props.schema.item;
        const Values = this.props.Values;
        const scan = this.props.scan;

        const valItem = Values.find((val, index) => val.FieldName == schema.FieldName) || {
            FieldName: schema.FieldName,
            FieldValue: ''
        };

        let val = valItem.FieldValue || '';
        if (!scan) {
            valItem.FieldValue=valItem.FieldValue||schema.PresetValue||'';
            val =  valItem.FieldValue;
        }
        const Shape = schema.Shape;
        switch (Shape){
            case "仅时间":
            case "日期":
            case "时间":
            {
                return (<TimePicker  item={schema} val={val} scan={scan}/>);
            }
            break;
            case "值复选器":// 值复选器，可选值给定的CheckBox
            case "值复选择器":// 值复选器，可选值给定的CheckBox
            {
                return (<CheckBox  item={schema} val={val} scan={scan}/>);
            }
            break;
            case "平铺值选择器":// 平铺值选择器，可选值给定的RadioButton
            {
                return (<Radio  item={schema} val={val} scan={scan}/>);
            }
            default:
            {
                return (<Text item={schema} val={val} scan={scan}/>)
            }

        }
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