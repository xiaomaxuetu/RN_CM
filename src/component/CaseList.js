import React, { PureComponent } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ListView, Image,SectionList} from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import { screen } from '../common/index'
import CaseItem from './CaseItem'

export default class CaseList extends PureComponent{


    constructor(){
        super()
    }
    componentDidMount(){

    }
    componentWillMount(){
    }

    _renderItem(item,Values){

        return <CaseItem schema={item} Values={Values} scan={false}/>
    }
    _renderSectionHeader(section){

        return (
            <View style={{ flex: 1, height: 25 }}>
                <Text style={styles.sectionHeader} >{section.section.key}</Text>
            </View>
        )
    }
    _extraUniqueKey(item ,index){
        return "index"+index+item;
    }
    /*[
        { data: [{ title: "nidaye" }], key: "s1" },
{ data: [{ title: "nidaye" }], key: "s2" },
{ data: [{ title: "nidaye" }], key: "s3" },
{ data: [{ title: "nidaye" }], key: "s4" },
]*/
    render(){

        const tableData = this.props.tableData;
        if (!tableData.Groups){
            return(<View/>)
        }

        const Groups = tableData.Groups;
        const Values = tableData.Values;

        const sectionGroup = Groups.map(function (group, i) {

            if (group.Visible == 0){
                return;
            }
            if (group.Schema.length == 0){
                return;
            }
            
            const tableitem = group.Schema.map(function (item,j) {
                return item;
            })

            return {data:tableitem,key:group.GroupName}

        })
        return(
            <View>
                <SectionList
                    renderItem={item=>{return(this._renderItem(item,Values))}}
                    renderSectionHeader={this._renderSectionHeader}
                    sections={sectionGroup}
                    keyExtractor = {this._extraUniqueKey}
                />
            </View>
        )
    }

}
const styles = StyleSheet.create({

    sectionHeader: {
        marginLeft: 10,
        padding: 6.5,
        fontSize: 12,
        color: '#000000'
    },
});