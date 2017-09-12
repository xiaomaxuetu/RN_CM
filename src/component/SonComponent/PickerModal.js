import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image,Modal,Picker,Button } from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../../common/index'
import color from "../../widget/color";

export default class PickerModal extends PureComponent{


    constructor(){
        super()

        this.state={
            isShow:false,
            lang:'java'
        }
    }
    componentDidMount(){

    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            isShow:nextProps.showModal
        });
    }

    render(){
        const parent = this.props.parent;
        return(
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.state.isShow}
                onRequestClose={() => {alert("Modal has been closed.")}}
            >
                <TouchableOpacity
                    style={styles.topTouchableOpacity}
                    onPress={() => {
                        this.setState({
                            isShow:false
                        })
                        parent.setState({
                            showModal:false
                        })
                    }}/>
                <View style={styles.picker_parent}>
                    <View style={styles.ensure_cancel}>
                        <Button
                            onPress={()=>{
                                this.setState({
                                    isShow:false
                                })
                                parent.setState({
                                    showModal:false
                                })
                            }}
                            title="取消"
                            color="#33b5e5"
                        />
                        <Button
                            onPress={()=>{
                                this.setState({
                                    isShow:false
                                })
                                parent.setState({
                                    showModal:false
                                })
                            }}
                            title="确定"
                            color="#33b5e5"
                        />
                    </View>
                    <Picker
                        selectedValue={this.state.lang}
                        onValueChange={(lang)=>{this.setState({lang:lang})}}
                        style={styles.picker}>
                        <Picker.Item label={"java"} value="java"/>
                        <Picker.Item label={"js"} value="js"/>
                    </Picker>
                </View>
            </Modal>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    topTouchableOpacity:{
        flex:0.7
    },
    picker_parent:{
        flex:0.3,
        flexDirection:'column',
        justifyContent:'space-around',
        borderWidth:1,
        borderColor:color.border
    },
    btn:{
        flex:0.2
    },
    ensure_cancel:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    picker:{
        flex:0.8
    }

});