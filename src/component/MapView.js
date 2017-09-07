
import {
    requireNativeComponent,
    View,
    NativeModules,
    Platform,
    DeviceEventEmitter
} from 'react-native';

import React, {
    Component,
    PropTypes
} from 'react';


class MapView extends Component{
    static propTypes = {
        ...View.propTypes,
        showLogo:PropTypes.bool,
        offlineMapUrl:PropTypes.object,
        annArray:PropTypes.object,
        polylinArray:PropTypes.object,
        polypointArray:PropTypes.object,
        onClickAnnViewCallback:PropTypes.func,
        onClickMapCallback:PropTypes.func,
        onCenterChangeCallback:PropTypes.func

    };
    constructor(props){
        super(props)
    }
    _onChange(event){
        if (typeof this.props[event.nativeEvent.type] === 'function'){
            this.props[event.nativeEvent.type](event.nativeEvent.params)
        }
    }
    render(){
        return(
            <RNMapView {...this.props} onChange={this._onChange.bind(this)}/>
        )
    }
}


var RNMapView = requireNativeComponent('RNTMap', MapView,{
    nativeOnly: {onChange: true}
});


// module.exports = MapView;
export default MapView;
