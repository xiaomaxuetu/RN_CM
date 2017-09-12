import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image,Picker,Button } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../../common/index'
import color from "../../widget/color";
import PickModal from './PickerModal'

export default class Radio extends PureComponent{


    constructor(){
        super()
        this.state ={
            lang:'是',
            showModal:false
        }
    }
    componentDidMount(){

    }
    componentWillMount(){
    }

    render(){
        const item = this.props.item;
        const scan = this.props.scan;
        const val = this.props.val;
        return(
            <View style={styles.container}>
                <View style={styles.showView}>
                    <Text style={styles.text1}>{item.FieldName}</Text>
                    <Text style={styles.text2}>{this.state.lang}</Text>
                    <Button
                        onPress={()=>{this.setState({
                            showModal:true,
                        })}}
                        title=">"
                        color="#841584"
                        style={styles.show_btn}
                    />
                </View>
                <PickModal showModal={this.state.showModal} parent={this}/>
            </View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around'
    },
    showView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    text1:{
        paddingLeft:10,
        flex:0.2
    },
    text2:{
        paddingLeft:10,
        flex:0.6
    },
    show_btn:{
        flex:0.2
    }
});