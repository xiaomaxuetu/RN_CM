import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { screen } from '../../common'
import color from '../../widget/color'
import {Heading1,Heading2,Paragraph} from '../../widget/Text'

class DoingBoxItem extends PureComponent{
    constructor(props){
        super(props)
        const CaseNO = props.info.item.CaseNo
    }
    componentDidMount(){

    }
    render(){
        let {info} = this.props;
        return(
            <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(info)}>
                <Heading1>{info.item.CaseNo}</Heading1>
                <Heading2>{info.item.FlowName}</Heading2>
                <Heading2>{info.item.ReporterName}</Heading2>
                <Heading2>{info.item.ReportTime}</Heading2>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        padding:10,
        borderBottomWidth:screen.onePixel,
        borderColor:color.border,
        backgroundColor:'white',
        height:100,
        justifyContent:'space-around'
    }
});
export default DoingBoxItem;