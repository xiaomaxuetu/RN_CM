import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image,ProgressViewIOS,Platform,ProgressBarAndroid } from 'react-native'
import { screen } from '../../../common'
import color from '../../../widget/color'
import {Heading1,Heading2,Paragraph} from '../../../widget/Text'



class PartrolTaskItem extends PureComponent{
    constructor(props){
        super(props)

    }
    componentDidMount(){

    }
    render(){
        let {item} = this.props.info;
        if (Platform.OS ==='ios'){
            return(
                <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(item)}>
                    <View style={styles.text_progress}>
                        <Text>{item.Name}</Text>
                        <Text>{item.CycleName}</Text>
                    </View>
                    <View style={styles.text_progress}>
                        <Text>到位:{item.ArriveSum}/{item.TotalSum}</Text>
                        <ProgressViewIOS progress={item.ArriveSum/item.TotalSum} style={styles.progress}/>
                    </View>
                    <View style={styles.text_progress}>
                        <Text>反馈:{item.FeedbackSum}/{item.TotalSum}</Text>
                        <ProgressViewIOS progress={item.FeedbackSum/item.TotalSum} style={styles.progress}/>
                    </View>
                    <View style={styles.text_progress}>
                        <Text>管段:{item.PipeLenth}/{item.TotalLength}</Text>
                        <ProgressViewIOS progress={item.PipeLenth/item.TotalLength} style={styles.progress}/>
                    </View>
                    <Text>巡线员姓名:{item.UserNames}</Text>

                </TouchableOpacity>
            );
        }else {
            return(
                <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(item)}>
                    <View style={styles.text_progress}>
                        <Text>{item.Name}</Text>
                        <Text>{item.CycleName}</Text>
                    </View>
                    <View style={styles.text_progress}>
                        <Text>到位:{item.ArriveSum}/{item.TotalSum}</Text>
                        <ProgressBarAndroid progress={item.ArriveSum/item.TotalSum} style={styles.progress} styleAttr="Horizontal" indeterminate={false}/>
                    </View>
                    <View style={styles.text_progress}>
                        <Text>反馈:{item.FeedbackSum}/{item.TotalSum}</Text>
                        <ProgressBarAndroid progress={item.FeedbackSum/item.TotalSum} style={styles.progress} styleAttr="Horizontal" indeterminate={false}/>
                    </View>
                    <View style={styles.text_progress}>
                        <Text>管段:{item.PipeLenth}/{item.TotalLength}</Text>
                        <ProgressBarAndroid progress={item.PipeLenth/item.TotalLength} style={styles.progress} styleAttr="Horizontal" indeterminate={false}/>
                    </View>
                    <Text>巡线员姓名:{item.userNames}</Text>

                </TouchableOpacity>
            );
        }

    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        padding:10,
        borderBottomWidth:screen.onePixel,
        borderColor:color.border,
        backgroundColor:'white',
        height:150,
        justifyContent:'space-around'
    },
    text_progress:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    progress:{
        minWidth:'60%'
    }
});
export default PartrolTaskItem;
