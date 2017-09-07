package com.gis_map;

import android.view.View;

import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.zondy.mapgis.android.mapview.*;
import com.zondy.mapgis.core.map.Map;

import java.util.HashMap;

/**
 * Created by cmios on 2017/7/20.
 */

public class MapViewManager extends ViewGroupManager {
    private static final String REACT_CLASS = "RNTMap";
    private GISMapView mapView;
    private ReactContext context;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected GISMapView createViewInstance(ThemedReactContext reactContext) {
        this.context = reactContext;
        mapView = new GISMapView(context);
        return mapView;
    }

    @ReactProp(name = "showLogo")
    public void setShowLogo(GISMapView mapV,boolean isShowLogo){
        mapV.mapView.setShowLogo(isShowLogo);
    }
    @ReactProp(name = "offlineMapUrl")
    public void setofflineMapUrl(GISMapView mapV, ReadableMap map){

    }
    @ReactProp(name = "annArray")
    public void setannArray(GISMapView mapV, ReadableMap map){

    }
    @ReactProp(name = "polylinArray")
    public void setpolylinArray(GISMapView mapV, ReadableMap map){

        MapTool.drawPatrolScanAreaLine(mapV,map);

    }
    @ReactProp(name = "polypointArray")
    public void setpolypointArray(GISMapView mapV, ReadableMap map){

        mapView.partrolScanMap = map;


        MapTool.drawPartrolScanPoints(mapV.mapView,map,true);
    }

}
