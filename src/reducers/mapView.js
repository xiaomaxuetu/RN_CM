import {ACTIONS} from '../actions/mapView'
const initState = {
    isMapViewControlModalShow:false,
    polypointlist:{},
    polylinelist:{},
    polygonlist:{},
    annList:{},
};
export default function mapReducer(state = initState,action) {
    switch (action.type){
        case ACTIONS.CHANGE_MAP_CONTROL_MODAL_VISIBILITY:
            return Object.assign({},state,{
                isMapViewControlModalShow:action.visible
            });
        case ACTIONS.CHNAGE_MAP_CONTROL_POLYPOINT_LIST:
            return Object.assign({},state,{
                polypointlist:action.polypointlist
            });
        case ACTIONS.CHANGE_MAP_CONTROL_POLYLINE_LIST:
            return Object.assign({},state,{
                polylinelist:action.polylineList
            });
        case ACTIONS.CHNAGE_MAP_CONTROL_POLYGON_LIST:
            return Object.assign({},state,{
                polygonlist:action.polygonlist
            });
        case ACTIONS.CHANGE_MAP_CONTROL_ANN_LIST:
            return Object.assign({},state,{
                polypointlist:action.polypointlist
            });
        default:
            return state;
    }

}
