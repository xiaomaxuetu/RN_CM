import {NativeModules,Platform} from 'react-native'
export const ACTIONS = {
    CHANGE_MAP_CONTROL_MODAL_VISIBILITY:'CHANGE_MAP_CONTROL_MODAL_VISIBILITY',
    CHANGE_MAP_CONTROL_ANN_LIST:'CHANGE_MAP_CONTROL_ANN_LIST',
    CHANGE_MAP_CONTROL_POLYLINE_LIST:'CHANGE_MAP_CONTROL_POLYLINE_LIST',
    CHNAGE_MAP_CONTROL_POLYPOINT_LIST:'CHNAGE_MAP_CONTROL_POLYPOINT_LIST',
    CHNAGE_MAP_CONTROL_POLYGON_LIST:'CHNAGE_MAP_CONTROL_POLYGON_LIST'
}

export function changeMusicControlModalVisbility(visible) {
    return{
        type:ACTIONS.CHANGE_MAP_CONTROL_MODAL_VISIBILITY,
        visible
    };
}
export function changeMapControlAnnList(annList) {
    return{
        type:ACTIONS.CHANGE_MAP_CONTROL_ANN_LIST,
        annList
    };
}
export function changeMapControlPolylineList(polylineList) {
    return{
        type:ACTIONS.CHANGE_MAP_CONTROL_POLYLINE_LIST,
        polylineList
    };
}
export function changeMapControlPolypointList(polypointlist) {
    return{
        type:ACTIONS.CHNAGE_MAP_CONTROL_POLYPOINT_LIST,
        polypointlist
    };
}
export function changeMapControlPolygonList(polygonlist) {
    return{
        type:ACTIONS.CHNAGE_MAP_CONTROL_POLYGON_LIST,
        polygonlist
    };
}